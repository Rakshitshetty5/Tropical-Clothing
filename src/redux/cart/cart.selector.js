import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,item) => {
        return acc + item.quantity
    },0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, item) => {
        return acc + ( item.prodPrice * item.quantity )
    },0)
)