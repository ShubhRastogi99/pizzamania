import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Button from "react-bootstrap/Button";
import {addToCart, deleteFromCart} from "../actions/cartAction"
import {BsFillTrashFill} from 'react-icons/bs'
import Checkout from '../components/Checkout';

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems
  const dispatch = useDispatch()
  const Total = cartItems.reduce((x, item) => x + item.price, 0)
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Cart Items</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h6>
                      {item.name} [{item.varient}]
                    </h6>
                    <h6>
                      Price: {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity:{" "}
                      <Button
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      >
                        -
                      </Button>
                      {"  "} {item.quantity} {"  "}
                      <Button
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      >
                        +
                      </Button>
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ height: "85px", width: "85px" }}
                    />
                    &nbsp; &nbsp;
                    <BsFillTrashFill
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Total: ₹{Total}</h4>
            <Checkout Total={Total}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartScreen