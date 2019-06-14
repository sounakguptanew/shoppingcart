import {combineReducers} from 'redux';
import data from '../components/data';
import {AddToCart} from '../components/cartthumbnail/Reducer/AddToCart';
import {BillingAddress} from '../components/Billing/Reducer/checkoutReducer';
import totalReducer from './total-reducer';
import {productDetails} from "../components/cartthumbnail/Reducer/productDetail";

const initState = data;

const reducer = (state = initState ,action) => {
    switch(action.type){
        case "onChange":{
            return {state}
        }
        default : {
            return state;
        }
    }
}


export const rootReducer = combineReducers({
    reducer,
    productDetails,
    AddToCart,
    BillingAddress,
    totalReducer
})