import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import togglerReducer from './toggler/toggler.reducer'
import menuReducer from './menu/menu.reducer'
import shopReducer from './shop/shop.reducer'
import wishlistReducer from './wishlist/wishlist.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    toggler : togglerReducer,
    menu: menuReducer,
    shop: shopReducer,
    wishlist: wishlistReducer
})

export default persistReducer(persistConfig, rootReducer)