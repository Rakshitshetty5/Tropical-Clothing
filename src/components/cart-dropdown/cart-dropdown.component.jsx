import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import { selectCartItems } from '../../redux/cart/cart.selector'

import './cart-dropdown.styles.scss'
import { toggleCartHidden } from '../../redux/toggler/toggler.actions'


const CartDropdown = ({cartItems, toggleCartHidden, history}) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items">
            {
                cartItems.length > 0 ?
                    cartItems.map(item => 
                        <CartItem 
                            name = {item.prodName}
                            price = {item.prodPrice}
                            quantity = {item.quantity}
                            imageUrl = {item.prodImage}
                            size = {item.prodSize}
                            key={item.id + item.prodSize}
                        />    
                    )
                :
                <div className="cart-dropdown__message">Your Cart is Empty</div>
            }
        </div>
        <CustomButton style={{ height: '3rem', width: '100%' }} onClick={() => 
        {
            history.push('/checkout')
            toggleCartHidden()
        
        }}>Go To Checkout</CustomButton>
    </div> 
)


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(React.memo(CartDropdown)))