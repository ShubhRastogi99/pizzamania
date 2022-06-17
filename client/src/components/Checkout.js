import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderAction';

const Checkout = ({Total}) => {
  const dispatch = useDispatch()
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, Total))
    console.log(token)
  }
  return (
    <StripeCheckout
      amount={Total * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51L8aX0SH7md1X4CK0nkv4fpqEqpbW5TVxzKT0OuuUOrhdRvmgUf6OEE7FDbiWTY4AchhD6riu0TSP7SNKCQlFozg00lVJQADD0"
      currency="INR"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
}

export default Checkout