import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/toggler/toggler.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

import sprite from '../../assets/sprite.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, count }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <svg className="cart-icon__svg">
            <use href={sprite + "#icon-cart"} />
        </svg>
        <span className="cart-icon__count">{count}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    count : selectCartItemsCount 
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)


