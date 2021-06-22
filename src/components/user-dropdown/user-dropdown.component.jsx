import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { toggleUserOptionsHidden  } from '../../redux/toggler/toggler.actions'
import { signOutStartThunk } from '../../redux/user/user.actions'
import { selectCurrentUser } from '../../redux/user/user.selector'  
import { clearCart } from '../../redux/cart/cart.actions'

import sprite from '../../assets/sprite.svg'

import './user-dropdown.styles.scss'

const UserDropdown = ({signOutStartThunk, currentUser, toggleUserOptionsHidden, clearCart, history, location}) => (
    
     <div className="user-dropdown">
         {
            currentUser ?
                <React.Fragment>
                    <div className="user-dropdown__wishlist" onClick={() => 
                    {       
                            toggleUserOptionsHidden()
                            location.pathname = '/'
                            history.push('shop/wishlist')
                    }}>
                        <svg className="heart-icon">
                            <use href={sprite + "#icon-heart"} />
                        </svg>
                        <span>Wishlist</span>
                    </div>
                    <div className="user-dropdown__settings" onClick={() => 
                    {       
                            toggleUserOptionsHidden()
                            history.push('/settings')
                    }}>
                        <svg className="cog-icon">
                            <use href={sprite + "#icon-cog"} />
                        </svg>
                        <span>Profile</span>
                    </div>
                    <div className="user-dropdown__logout" onClick={() => 
                    {       
                            toggleUserOptionsHidden()
                            signOutStartThunk()
                            clearCart()
                    }}>
                        <svg className="logout-icon">
                            <use href={sprite + "#icon-log-out"} />
                        </svg>
                        <span>Logout</span>
                    </div>
                </React.Fragment>
                
            :
                <Link className='user-dropdown__login' to='/signin' onClick={toggleUserOptionsHidden}>
                     <svg className="logout-icon">
                            <use href={sprite + "#icon-log-out"} />
                    </svg>
                    <span>Signin / Signup</span>
                </Link>
         }

    </div>     
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    signOutStartThunk : () => dispatch(signOutStartThunk()),
    toggleUserOptionsHidden: () => dispatch(toggleUserOptionsHidden()),
    clearCart : () => dispatch(clearCart())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserDropdown))