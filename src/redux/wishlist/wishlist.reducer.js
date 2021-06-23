import { WishlistActionTypes } from "./wishlist.types"
import { UserActionTypes } from "../user/user.types"

const INITIAL_STATE = {
    wishlistItems : [],
    error : undefined
}

const wishlistReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case WishlistActionTypes.MANIPULATE_WISHLIST:{
            return{
                ...state,
                wishlistItems: action.payload,
                error: undefined
            }
        }
        case WishlistActionTypes.WISHLIST_ERROR:{
            return{
                ...state,
                wishlistItems: [],
                error: action.payload
            }
        }

        case UserActionTypes.SIGN_OUT_SUCCESS:{
            return{
                ...state,
                wishlistItems: []
            }
        }

        default:{
            return state
        }
    }
}

export default wishlistReducer