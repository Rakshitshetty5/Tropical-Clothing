import { TogglerActionTypes } from "./toggler.types";

const INITIAL_STATE = {
    cartHidden : true,
    userOptionsHidden : true
}


const togglerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TogglerActionTypes.TOGGLE_USER_OPTIONS_HIDDEN:
            return {
                ...state,
                userOptionsHidden : !state.userOptionsHidden,
                cartHidden : true
            }
        case TogglerActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartHidden : !state.cartHidden,
                userOptionsHidden : true
                
            }
        

        default:
            return state
    }
}

export default togglerReducer