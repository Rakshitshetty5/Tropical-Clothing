import { useState } from "react"

import SignIn  from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

import './sign-in-sign-up.styles.scss'

const SignInSignUpPage = () => {
    const [ toggle, setToggle ] = useState(true)
    return(
        <div className="sign-in-sign-up">
            {
                toggle ? 
                    <div className="in">
                        <h1>Dont have an account ? <button onClick={() => setToggle(!toggle)}>Sign Up</button></h1>
                        <SignIn/>
                    </div>
                :
                    <div className="up">
                        <h1>Already have an account ? <button onClick={() => setToggle(!toggle)}>Sign In</button></h1>
                        <SignUp />
                    </div>
            }
        </div>
    )
} 


export default SignInSignUpPage