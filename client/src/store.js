import {combineReducers} from 'redux'
import  {createStore , applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzaReducer } from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer } from './reducers/userReducer'
import { placeOrderReducer, getUserOrderReducer } from './reducers/orderReducer'
const finalReducer = combineReducers({
    getAllPizzaReducer : getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer
})

const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
// const cartItems = []
const initialState = {
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
   currentUser:currentUser
    }
}
const composeEnhancers= composeWithDevTools({})
const store= createStore(finalReducer ,initialState , composeEnhancers(applyMiddleware(thunk)))

export default store