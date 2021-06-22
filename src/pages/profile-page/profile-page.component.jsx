import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'

import { selectPhotoUrl, selectDisplayName, selectAddress, selectUserId } from '../../redux/user/user.selector'

import { uploadImage, updateData } from '../../firebase/firebase.utils'

import './profile-page.styles.scss'

const ProfilePage = ({user_photo, user_name, user_address, user_id}) => {

    const [userData, setUserData] = useState({
        photoUrl: '',
        displayName: '',
        address: ''
    })

    useEffect(() => {
        setUserData({ 
            photoUrl: user_photo,
            displayName: user_name,
            address: user_address
         })
       
    },[user_photo, user_name, user_address])
   

    const { displayName, address } = userData

    const handleChange = (e) => {
        const { value, name } = e.target

        if(name === 'photoUrl'){
            setUserData({ ...userData,  [name] : e.target.files[0]  })
        }else{
            setUserData({ ...userData,  [name] : value  })
        }
    }

    const saveData = () => {
        try{
            updateData(user_id, { displayName, address })

        }catch(err){
            console.log(err)
        }
    } 

    const uploadImg = async () => {
        const { photoUrl } = userData 
        try{
            await uploadImage(photoUrl, user_id)

        }catch(err){
            console.log(err.message)
        }
    }


    return(
        <div className="profile-page">
           <div className="profile-page__image">
                <img src={user_photo} alt="" />
                <input type="file" 
                    name="photoUrl"
                    onChange={handleChange}
                   
                />           
                <CustomButton cardbutton onClick={uploadImg}>Update Image</CustomButton>
           </div>
           <div className="profile-page__details">
                <h1>Account Details</h1>
                <CustomInput
                    type="text"
                    name="displayName"
                    placeholder="Display Name"
                    handleChange={handleChange}
                    value={displayName}
                    required
                />
                <div className="address">
                    <textarea className="address" 
                        placeholder="Enter address" 
                        name="address"
                        rows="10" 
                        value={address}
                        onChange={handleChange}
                    />
                </div>
                <CustomButton cardbutton onClick={saveData}>Save</CustomButton>
           </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user_photo : selectPhotoUrl,
    user_name : selectDisplayName,
    user_address : selectAddress,
    user_id : selectUserId
})



export default connect(mapStateToProps)(ProfilePage)