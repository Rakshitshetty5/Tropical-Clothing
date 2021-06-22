import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useEffect } from 'react'


import Card from '../../components/card/card.component'

import { selectWishlistedItems } from '../../redux/wishlist/wishlist.selector'
import { getWishlistedIdsThunk } from '../../redux/wishlist/wishlist.actions'
import { selectUserId } from '../../redux/user/user.selector'


import './wishlist.styles.scss'


const WishlistPage = ({ getWishlistedIdsThunk, user_id, wishlistItems }) => {

    useEffect(() => {
        if(user_id){
            getWishlistedIdsThunk(user_id)
        }
    },[user_id])

    return(
    <div className="wishlist-page">
        {
            wishlistItems.map(item => <Card item={item} key={item.id}/>)
        }
    </div>
)}

const mapDispatchToProps = dispatch => ({
    getWishlistedIdsThunk: (user_id) => dispatch(getWishlistedIdsThunk(user_id))
})

const mapStateToProps = createStructuredSelector({
    wishlistItems : selectWishlistedItems,
    user_id: selectUserId
})


export default connect(mapStateToProps,mapDispatchToProps)(WishlistPage)