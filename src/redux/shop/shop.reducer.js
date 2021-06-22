import ShopActionsTypes from "./shop.types";

const INITIAL_STATE = {
    collections : null,
    isCollectionsFetching : true,
    errorMessage : undefined,
    brands: null,
    isBrandsFetching: true
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case ShopActionsTypes.FETCH_COLLECTIONS_START: {
            return {
                ...state,
                isCollectionsFetching  : true
            }
        }

        case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:{
            return {
                ...state,
                isCollectionsFetching: false,
                collections: action.payload,
                errorMessage : undefined 
            }
        }

        case ShopActionsTypes.FETCH_SHOP_FAILURE:{
            return{
                ...state,
                isCollectionsFetching: false,
                isBrandsFetching: false,
                errorMessage: action.payload
            }
        }

        case ShopActionsTypes.FETCH_BRANDS_START:{
            return{
                ...state,
                isBrandsFetching: true
            }
        }

        case ShopActionsTypes.FETCH_BRANDS_SUCCESS:{
            return {
                ...state,
                isBrandsFetching: false,
                errorMessage: undefined,
                brands: action.payload
            }
        }


        default:
            return state;
    }
}


export default shopReducer