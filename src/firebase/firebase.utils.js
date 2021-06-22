import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBRIvV7z1eTq0m6xRgxHbahSlfSK8QwQIQ",
    authDomain: "tropicalecommerce-6b48a.firebaseapp.com",
    projectId: "tropicalecommerce-6b48a",
    storageBucket: "tropicalecommerce-6b48a.appspot.com",
    messagingSenderId: "148989563272",
    appId: "1:148989563272:web:8c6ae9db2b146f8c63aa3d",
    measurementId: "G-790HRJCR8G"
  };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()
export const storage = firebase.storage()


export const createUserDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email, photoURL } = userAuth

        try{
            await userRef.set(
                {
                    displayName,
                    email,
                    photoURL,
                    ...additionalData
                }
            )
        }catch(error){
            console.log(error)
        }
    }

    return userRef
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
        doc => {
            const { items } = doc.data();

            return{
                category: doc.id,
                items
            }
        }
    )

    // {
    //     items: []
    //     category : ''
    // }

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.category.toLowerCase()] = collection
        return acc
    },{})

    // category : {
    //     items : [],
    //     category : ''
    // }

}
export const updateData = async(id, propertyToUpdate) => {
  
  const userRef = firestore.doc(`users/${id}`)

  const snapShot = await userRef.get()

    if(snapShot.exists){
        try{
          await userRef.update(
              propertyToUpdate  
        )
        }catch(error){
            console.log(error)
        }
    }
    alert('Updated Successfully. Refresh page to see changes')
    return userRef
}


export const uploadImage = async (userImage, userId) => {
  const imageName = userId + userImage.name
  const uploadTask = storage.ref(`user/${imageName}`).put(userImage);
      uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("user")
          .child(imageName)
          .getDownloadURL()
          .then(url => {
            //upload remaining data
            if(url){
              updateData(userId, {"photoURL": url})
            }
          });
      }
      );

}

export const manipulateWishlistAsync = async(user_id, prod_id, isWishlisted) => {
  
  const userRef = firestore.doc(`whishlist/${user_id}`)

  const snapShot = await userRef.get()
  if(!snapShot.exists){
    try{
      await userRef.set({
        wishlist: firebase.firestore.FieldValue.arrayUnion(prod_id)
        })
    }catch(error){
          console.log(error)
    }
  }else{
    try{
      if(!isWishlisted){
        await userRef.update({
          wishlist: firebase.firestore.FieldValue.arrayUnion(prod_id)
          })
      }else{
        await userRef.update({
          wishlist: firebase.firestore.FieldValue.arrayRemove(prod_id)
          })
      }
      
    }catch(error){
          console.log(error)
    }
  }
  return userRef
}

export const getWishlistedIdsAsync = async(user_id) => {
  const refObj = firestore.doc(`whishlist/${user_id}`)
  const snapShot = await refObj.get()
  if(snapShot.exists){
      const wishlistObj = snapShot.data()
      return wishlistObj.wishlist
  }

  return []

}




export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
       const unsubscribe = auth.onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
       }, reject);
    });
}


export default firebase


