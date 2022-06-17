import { createStore ,combineReducers, applyMiddleware} from 'redux';
//import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasreducer } from './reducers/pizzareducers';
import { cartReducer } from './reducers/cartReducer';
import { userResgisterReducer } from './reducers/userReducer';
import { userLoginReducer } from './reducers/userReducer';
import { placeOrderReducer } from './reducers/orderReducer';
import { getUserOrdersReducer } from './reducers/orderReducer';
import { addPizzasreducer } from './reducers/pizzareducers';
import { getpizzabyidreducer } from './reducers/pizzareducers';
import { updatepizzabyidreducer } from './reducers/pizzareducers';
import { getallUserOrdersReducer } from './reducers/orderReducer';
import { getAllUsersreducer } from './reducers/userReducer';

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const rootReducer = combineReducers({
  getAllPizzasreducer: getAllPizzasreducer,
  cartReducer: cartReducer,
  userResgisterReducer: userResgisterReducer,
  userLoginReducer: userLoginReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzasreducer: addPizzasreducer,
  getpizzabyidreducer: getpizzabyidreducer,
  updatepizzabyidreducer: updatepizzabyidreducer,
  getallUserOrdersReducer: getallUserOrdersReducer,
  getAllUsersreducer: getAllUsersreducer
});

const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cartReducer: {
    cartItems: cartItems
  },
  userLoginReducer: {
    currentUser: currentUser
  }
}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;