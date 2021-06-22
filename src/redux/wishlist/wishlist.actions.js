import { WishlistActionTypes } from "./wishlist.types";

import { manipulateWishlistAsync, getWishlistedIdsAsync } from '../../firebase/firebase.utils'



export const manipulateWishlist = (prodIDs) => ({
    type: WishlistActionTypes.MANIPULATE_WISHLIST,
    payload: prodIDs
})
export const wishlistError = (error) => ({
    type: WishlistActionTypes.WISHLIST_ERROR,
    payload: error
})

export const manipulateWishlistThunk = ({user_id, prod_id, isWishlisted}) => {
    return async dispatch =>  {
        try{
            await manipulateWishlistAsync(user_id, prod_id, isWishlisted)
            const wishlist = await getWishlistedIdsAsync(user_id)
            dispatch(manipulateWishlist(wishlist))
        }catch(error){
            dispatch(wishlistError(error.message))
        }
    }
}

export const getWishlistedIdsThunk = (user_id) => {
    return async dispatch => {
        try{
            const wishlist = await getWishlistedIdsAsync(user_id)
            dispatch(manipulateWishlist(wishlist))
        }catch(error){
            dispatch(wishlistError(error.message))
        }
    }
}