import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser : null,
    error : undefined
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:{
            return{
                ...state,
                currentUser: action.payload,
                error: undefined
            }
        }

        case UserActionTypes.SIGN_OUT_SUCCESS:{
            return{
                ...state,
                currentUser: null,
                error: undefined
            }
        }

        case UserActionTypes.USER_FAILURE:{
            return{
                ...state,
                error: action.payload
            }
        }

        

        default:
            return state
    }
}

export default userReducer