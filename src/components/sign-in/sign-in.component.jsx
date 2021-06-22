import { useState } from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CustomInput from '../custom-input/custom-input.component'

import { googleSignInStartThunk, emailSignInStartThunk } from '../../redux/user/user.actions'

import './sign-in.styles.scss'

const SignIn = ({googleSignInStartThunk, emailSignInStartThunk}) => {

    const [ signInData, setSignInData ] = useState({
        email : '',
        password : ''
    })

    const { email, password } = signInData

    const handleChange = (e) => {
        const { name, value } = e.target

        setSignInData({...signInData, [name] : value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( email && password ){
            emailSignInStartThunk(signInData)
        }
    }


    return(
       <form className="sign-in" onSubmit={handleSubmit}>
           <CustomInput
                type="email"
                name="email"
                placeholder="Email"
                handleChange={handleChange}
                value={email}
                required
            />
             <CustomInput
                type="password"
                name="password"
                placeholder="Password"
                handleChange={handleChange}
                value={password}
                required
            />
           <CustomButton type="submit" style={{ height: '2.8rem', width: '70%', marginTop: '1rem' }}>Sign In</CustomButton>
           <CustomButton type="button" style={{ height: '2.8rem', width: '70%', marginTop: '1rem' }} googlebutton onClick={googleSignInStartThunk}>Sign In with google</CustomButton>
       </form>
    )

}


const mapDispatchToProps = dispatch => ({
    googleSignInStartThunk : () => dispatch(googleSignInStartThunk()),
    emailSignInStartThunk : (userCred) => dispatch(emailSignInStartThunk(userCred))
})

export default connect(null,mapDispatchToProps)(SignIn)