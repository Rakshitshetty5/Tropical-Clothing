import { connect } from 'react-redux'

import { removeItem, addItemToCart, clearItemFromCart } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({item , removeItem, addItemToCart, clearItemFromCart}) => {
    const  {prodName, prodImage, prodPrice, prodSize, quantity} = item
    return(
        <div>
            <div className="checkout-item">
                <div className="checkout-item__property">
                    <div className="product">
                        <img src={prodImage} alt="" />
                        <div>{prodName}</div>
                    </div>
                </div>
                <div className="checkout-item__property">
                    <div className="size">
                        <div>{prodSize}</div>
                    </div>
                </div>
                <div className="checkout-item__property">
                    <div className="quantity">
                        <button onClick={() => addItemToCart(item)}>+</button>
                        <div>{quantity}</div>
                        <button onClick={() => removeItem(item)}>-</button>
                    </div>
                </div>
                <div className="checkout-item__property">
                    <div className="price">
                        <div>₹{prodPrice}</div>
                        <button className="remove-btn" onClick={() => clearItemFromCart(item)}>X</button>
                    </div>
                </div>
            </div>
            <div className="checkout-item-mobile">
                <div className="product">
                    <img src={prodImage} alt="" />
                    <div className="product-info">
                        <div>
                            <div>{prodName}</div>
                            <div className="product-info__size">
                                <div>{prodSize}</div>
                            </div>
                        </div>
                        <button className="remove-btn" onClick={() => clearItemFromCart(item)}>Remove</button>
                    </div>
                </div>
                <div className="details">
                    <div className="quantity">
                        <button onClick={() => addItemToCart(item)}>+</button>
                        <div>{quantity}</div>
                        <button onClick={() => removeItem(item)}>-</button>
                    </div>
                    <div className="price">₹{prodPrice}</div>
                </div>
            </div>
        </div>
      
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItem(item)),
    addItemToCart : item => dispatch(addItemToCart(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)