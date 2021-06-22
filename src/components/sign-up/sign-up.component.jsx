import { useState } from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CustomInput from '../custom-input/custom-input.component'

import { googleSignInStartThunk, emailSignUpStartThunk } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

const SignUp = ({ emailSignUpStartThunk, googleSignInStartThunk }) => {

    const [ signUpData, setSignUpData ] = useState({
        displayName : '',
        email : '',
        password : '',
        confirmPassword: ''
    }) 

    const { displayName, email, password, confirmPassword } = signUpData


    const handleChange = e => {
        const { name, value } = e.target

        setSignUpData({...signUpData, [name] : value })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(displayName && email && password && confirmPassword){
            if(password === confirmPassword){
                emailSignUpStartThunk({email, password, displayName})
            }
        }

    }

   

    return(
        <form className="sign-up" onSubmit={handleSubmit}>
              <CustomInput
                type="text"
                name="displayName"
                placeholder="Name"
                handleChange={handleChange}
                value={displayName}
                required
            />
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
              <CustomInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                handleChange={handleChange}
                value={confirmPassword}
                required
            />
            <CustomButton type="submit" style={{ height: '2.8rem', width: '70%', marginTop: '1rem' }}>Sign Up</CustomButton>
            <CustomButton type="button" style={{ height: '2.8rem', width: '70%', marginTop: '1rem' }} googlebutton onClick={googleSignInStartThunk}>Sign Up with google</CustomButton>

        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStartThunk : () => dispatch(googleSignInStartThunk()),
    emailSignUpStartThunk : (userCred) => dispatch(emailSignUpStartThunk(userCred))
})

export default connect(null,mapDispatchToProps)(SignUp)