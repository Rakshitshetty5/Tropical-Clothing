import { createSelector } from 'reselect'

import { selectCollections } from '../shop/shop.selectors'

const selectWishlist = state => state.wishlist

export const selectWishlistIDS = createSelector(
    [selectWishlist],
    wishlist => wishlist.wishlistItems
)

export const selectWishlistedItems = createSelector(
    selectCollections,
    selectWishlistIDS,
    (collections, ids) => {
        if(collections && ids){
            return  ids.reduce((acc,w_id) => {
                for(let collection in collections){
                    const item = collections[collection].items.filter(item => item.id === w_id)
                    acc.push(...item)
                }
                return acc
            },[])
        }
    }

   
)