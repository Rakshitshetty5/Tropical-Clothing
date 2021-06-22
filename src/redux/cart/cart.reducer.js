import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItem, clearItem } from "./cart.utils";

const INITIAL_STATE = {
   cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
       
        case CartActionTypes.ADD_ITEM_TO_CART : {
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        }

        case CartActionTypes.REMOVE_ITEM : {
            return{
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        }

        case CartActionTypes.CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: clearItem(state.cartItems, action.payload)
            }
        }
        
        case CartActionTypes.CLEAR_CART: {
            return{
                ...state,
                cartItems: []
            }
        }

        default:
            return state
    }
}

export default cartReducer