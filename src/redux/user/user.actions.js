import { UserActionTypes } from "./user.types";

import {
    auth,
    googleProvider,
    createUserDocument,
    getCurrentUser
} from '../../firebase/firebase.utils'

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const userFailure = error => ({
    type: UserActionTypes.USER_FAILURE,
    payload: error
})



const getSnapshotFromUserAuthThunk = (user, additionalData) => {
    return async dispatch => {
        try{
            const userRef = await createUserDocument(user, additionalData)
            const userSnapshot = await userRef.get();
            dispatch(signInSuccess({
                id: userSnapshot.id,
                ...userSnapshot.data()
            }))
        }catch(error){
            dispatch(userFailure(error.message))
        }
    }
}

export const googleSignInStartThunk =  () => {
    return async dispatch => {
        try{
            const { user } = await auth.signInWithPopup(googleProvider);
            dispatch(getSnapshotFromUserAuthThunk(user))
        }catch(error){
            dispatch(userFailure(error.message))
        }
    }
} 

export const emailSignInStartThunk = ({email, password}) => {
    return async dispatch => {
        try{
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            dispatch(getSnapshotFromUserAuthThunk(user))
        }catch(error){
            dispatch(userFailure(error.message))
        }
    }
}

const signInAfterSignUp = ({ user, additionalData }) => {
    return async dispatch => {
        dispatch(getSnapshotFromUserAuthThunk(user, additionalData))
    }
}

export const emailSignUpStartThunk = ({ email, password, displayName }) => {
    return async dispatch => {
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            dispatch(signInAfterSignUp({user, additionalData: {displayName}}))
        }catch(error){
            dispatch(userFailure(error.message))
        }
    }
}

export const checkUserSessionThunk = () => {
    return async dispatch => {
        try{
            const userAuth = await getCurrentUser()
            if(!userAuth) return
            dispatch(getSnapshotFromUserAuthThunk(userAuth))
        }catch(error){
            dispatch(userFailure(error.message))
        }
    }
}

export const signOutStartThunk = () => {
    return async dispatch => {
        try{
            await auth.signOut()
            dispatch(signOutSuccess())
        }catch(error){
            dispatch(userFailure(error.message))
        }
    }
} 