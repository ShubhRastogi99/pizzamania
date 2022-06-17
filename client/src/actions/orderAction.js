import axios from 'axios';
import { FiCornerDownLeft } from 'react-icons/fi';

export const placeOrder = (token, Total) => async (dispatch, getState) => {
    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().userLoginReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems
    try {
        const res = await axios.post('/api/orders/placeorder', {token, Total, currentUser, cartItems})
        dispatch({ type: "PLACE_ORDER_SUCCESS" });
        console.log(res);
    } catch(err) {
        dispatch({ type: "PLACE_ORDER_fAIL" });
        console.log(err)
    }
}

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().userLoginReducer.currentUser
    const userid = currentUser._id
    dispatch({type: 'USER_ORDER_REQUEST'})
    try {
        const res = await axios.post('/api/orders/getuserorder', {userid})
        dispatch({ type: "USER_ORDER_SUCCESS", payload: res.data });
        console.log(res);
    } catch(err) {
        dispatch({ type: "USER_ORDER_FAIL", payload: err });
        console.log(err)
    }
}

export const getallUserOrders = () => async (dispatch, getState) => {
  //const currentUser = getState().userLoginReducer.currentUser;
  //const userid = currentUser._id;
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const res = await axios.get ("/api/orders/alluserorder");
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: res.data });
    console.log(res);
  } catch (err) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: err });
    console.log(err);
  }
};

export const deliverorder = (orderid) => async (dispatch, getState) => {
  //const currentUser = getState().userLoginReducer.currentUser;
  //const userid = currentUser._id;
  dispatch({ type: "GET_ALL_ORDER_REQUEST" });
  try {
    const res = await axios.post("/api/orders/deliverorder", {orderid});
    alert('Delivered Successfully')
    dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: res.data });
    window.location.href = "/admin/orderlist"
  } catch (err) {
    dispatch({ type: "GET_ALL_ORDER_FAIL", payload: err });
    console.log(err);
  }
};

