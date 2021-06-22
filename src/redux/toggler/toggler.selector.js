import { createSelector } from 'reselect'

const selectToggler = state => state.toggler

export const selectUserOptionsHidden = createSelector(
    [selectToggler],
    toggler => toggler.userOptionsHidden
)

export const selectCartHidden = createSelector(
    [selectToggler],
    toggler => toggler.cartHidden
)