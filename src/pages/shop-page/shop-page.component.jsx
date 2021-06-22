import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Menu from "../../components/menu/menu.component"
import CollectionPage from "../collection-page/collection-page.component"
import WithLoader from '../../components/with-loader/with-loader.component'
import WishlistPage from '../wishlist/wishlist.component'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

import { fetchCollectionsStartThunk  } from '../../redux/shop/shop.actions'


const MenuWithLoader = WithLoader(Menu)
const CollectionPageWithLoader = WithLoader(CollectionPage) 
const WishlistPageWithLoader = WithLoader(WishlistPage)


const ShopPage = ({match, fetchCollectionsStartThunk, isFetching}) => {

    useEffect(() => {
        fetchCollectionsStartThunk();
    },[fetchCollectionsStartThunk])


    return(
        <div>
            <Route exact path={`${match.path}`} 
                  render={props => (<MenuWithLoader isLoading={isFetching} {...props}/>)}/>   
            <Route exact path={`${match.path}/wishlist`} 
                  render={props => (<WishlistPageWithLoader isLoading={isFetching} {...props}/>)}/>   
            <Route path={`${match.path}/products/:collectionId`} 
                  render={props => (<CollectionPageWithLoader isLoading={isFetching}  {...props}/>)}/>     
        </div>
    )
} 

const mapStateToProps = createStructuredSelector({
    isFetching : selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartThunk: () => dispatch(fetchCollectionsStartThunk())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)