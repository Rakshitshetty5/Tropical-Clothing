import { connect } from 'react-redux' 
import { useState } from 'react'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component'

import { addItemToCart } from '../../redux/cart/cart.actions'
import { selectUserId } from '../../redux/user/user.selector'
import { manipulateWishlistThunk  } from '../../redux/wishlist/wishlist.actions'
import { selectWishlistIDS } from '../../redux/wishlist/wishlist.selector'

import sprite from '../../assets/sprite.svg'

import './card.styles.scss'

const Card = ({ item, addItemToCart, user_id, manipulateWishlist, wishlist }) => {
    const {prodName, prodPrice, prodImage, prodDescription, prodSize} = item
    const [mySize, setMySize] = useState(null)
    const isWishlisted = wishlist.includes(item.id)
    const [selected, setSelected] = useState(isWishlisted)
  
    const modifySelectedItem = () => {
        if(!mySize){
            alert('Please Select a Size')
            return
        }
        const selectedItem = {
            ...item,
            prodSize : mySize
        }
        setMySize(null)
        addItemToCart(selectedItem)
    }

    return (
        <div className="card">
            <div className="card-image" style={{
                 backgroundImage: `url(${prodImage})`}} />
            <div className="card-content">
                <div className="card-content__head">
                    <div>
                        <div className="card-content__title">{prodName}</div>
                        <div className="card-content__price">
                            Rs. {prodPrice}
                        </div>
                    </div>
                    <div className="card-content__fav" onClick={() => { 
                        if(user_id){
                            setSelected(!isWishlisted)
                            manipulateWishlist({user_id,prod_id : item.id, isWishlisted})
                        }else{
                            alert('You need to login')
                        }
                        }}>
                        <svg className={`${selected ? "selected" : ''}  fav__icon`}>
                            <use href={sprite + "#icon-heart"} />
                        </svg>
                    </div>
                </div>
                <div className="card-content__description">{prodDescription.slice(0,180).trim()}...</div>
                <h1>Select Size</h1>
                <div className="card-content__sizes">
                       {
                            prodSize.split(',').map(size => 
                                <div className={`size ${mySize === size ? 'selected-size' : ''} `} onClick={() => setMySize(size)}  key={size}><span>{size}</span></div>
                            )
                       }
                </div>
                <CustomButton cardbutton onClick={() => {
                    if(user_id){
                        modifySelectedItem()
                    }else{
                        alert('You need to login')
                    }
                
                }
            
                }>Add to Cart</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user_id: selectUserId,
    wishlist: selectWishlistIDS
})

const mapDispatchToProps = dispatch => ({
    addItemToCart : item => dispatch(addItemToCart(item)),
    manipulateWishlist : obj => dispatch(manipulateWishlistThunk(obj))
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Card)