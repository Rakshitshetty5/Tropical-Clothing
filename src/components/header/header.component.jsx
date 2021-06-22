import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link, withRouter } from 'react-router-dom'

import sprite from '../../assets/sprite.svg'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import UserDropdown  from '../user-dropdown/user-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'
import UserIcon from '../user-icon/user-icon.component'

import { selectCartHidden, selectUserOptionsHidden } from '../../redux/toggler/toggler.selector'


import './header.styles.scss'

const Header = ({cartHidden, userHidden, history, location}) => {

    

    const handleClick = e => {
        if(e.charCode === 13) {
            location.pathname = '/'
            history.replace(`shop/products/${e.target.value.replace(/\s/g,"").toLowerCase()}`) 
            e.target.value = ''
        }
    }

    return(
        <header className="header" >
            <Link to="/">
                <img src="https://firebasestorage.googleapis.com/v0/b/tropicalecommerce-6b48a.appspot.com/o/appIMG%2Flogo.png?alt=media&token=72a73bbf-556b-4c87-a469-5a2672a72ab8" alt="" className="header-logo" />
            </Link>
            <div className="search-bar">
                <input type="text" className="search-bar__input" placeholder="Search for products or brands" onKeyPress={handleClick} />
                <div className="search-bar__button">
                    <svg className="search-bar__icon">
                        <use href={sprite + "#icon-magnifying-glass"} />
                    </svg>
                </div>
            </div>
            <div className="user-nav">
                <UserIcon />
                <CartIcon />
            </div>
            {
                userHidden ? 
                    null
                    :
                    <UserDropdown />
            }
            {
                cartHidden ?
                    null
                    :
                    <CartDropdown />
            }
        </header>
    
    )
}

const mapStateToProps = createStructuredSelector({
    cartHidden : selectCartHidden,
    userHidden: selectUserOptionsHidden
})

export default withRouter(connect(mapStateToProps)(Header))