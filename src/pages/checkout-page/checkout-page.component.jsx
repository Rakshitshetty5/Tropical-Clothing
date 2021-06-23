import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'

import './checkout-page.styles.scss'

const CheckoutPage = ({cartItems, cartTotal}) => {
    return(
        <div className="checkout">
            <h1>Shopping Cart</h1>
            {
                cartItems.length > 0 ?
                <React.Fragment>
                    <div className="checkout-table">
                        <div className="checkout-headers">
                            <div className="checkout-header">
                                <span>Product</span>
                            </div>
                            <div className="checkout-header">
                                <span>Size</span>
                            </div>
                            <div className="checkout-header">
                                <span>Quantity</span>
                            </div>
                            <div className="checkout-header">
                                <span>Total Price</span>
                            </div>
                        </div>
                        <div className="checkout-items">
                            {
                                cartItems.map(item => <CheckoutItem item={item} key={item.id + item.prodSize}/>)
                            }
                        </div>
                    </div>
                    <div className="cart-total">
                            <h4>Total:</h4>
                            <div>₹{cartTotal}</div>
                    </div>
                    
                    <StripeButton price={cartTotal}/>
                    <h3>Test Mode Credit Card Details</h3>
                    <h4>4242 4242 4242 4242 - Exp : 06/2020 - CVV:123 </h4>
                </React.Fragment>
                :
                <h1>Your cart is empty</h1>
            }
                
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal : selectCartTotal
})



export default connect(mapStateToProps)(CheckoutPage)