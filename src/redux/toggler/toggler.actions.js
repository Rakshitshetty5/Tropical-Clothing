import { TogglerActionTypes } from "./toggler.types";


export const toggleCartHidden = () => ({
    type: TogglerActionTypes.TOGGLE_CART_HIDDEN
})

export const toggleUserOptionsHidden = () => ({
    type: TogglerActionTypes.TOGGLE_USER_OPTIONS_HIDDEN
})