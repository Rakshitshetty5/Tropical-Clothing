import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectPhotoUrl = createSelector(
    [selectCurrentUser],
    currentUser => currentUser ? currentUser.photoURL : ''
)

export const selectDisplayName =  createSelector(
    [selectCurrentUser],
    currentUser => currentUser ? currentUser.displayName : ''
)

export const selectAddress = createSelector(
    [selectCurrentUser],
    currentUser => currentUser ? currentUser.address ? currentUser.address : '' : ''
)

export const selectEmail = createSelector(
    [selectCurrentUser],
    currentUser => currentUser ? currentUser.email : ''
)

export const selectUserId =  createSelector(
    [selectCurrentUser],
    currentUser => currentUser ? currentUser.id : null
)

