import ShopActionsTypes from "./shop.types";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collections) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections 

})

export const fetchBrandsStart = () => ({
    type: ShopActionsTypes.FETCH_BRANDS_START
})

export const fetchBrandsSuccess = (brands) => ({
    type: ShopActionsTypes.FETCH_BRANDS_SUCCESS,
    payload: brands

})

export const fetchShopFailure = (errorMessage) => ({
    type: ShopActionsTypes.FETCH_SHOP_FAILURE,
    payload: errorMessage
})


export const fetchCollectionsStartThunk = () => {
    return dispatch => {


        const collectionRef = firestore.collection('products')
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(
            snapshot => {
                dispatch(fetchCollectionsSuccess(convertCollectionSnapshotToMap(snapshot)))
            }
        ).catch(
            error => {
                dispatch(fetchShopFailure(error.message))
            }
        )

    }
}

export const fetchBrandsStartThunk = () => {
    return dispatch => {


        const docRef = firestore.collection('home').doc('assests')
        dispatch(fetchBrandsStart())

        docRef.get().then(
            doc => {
                if(doc.exists){
                    dispatch(fetchBrandsSuccess(doc.data()))
                }else{
                    dispatch(fetchShopFailure('No Such Document'))
                }
                
            }
        ).catch(
            error => {
                dispatch(fetchShopFailure(error.message))
            }
        )

    }
}