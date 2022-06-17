import React, { useEffect } from 'react'
import { getUserOrders } from '../actions/orderAction'
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Container} from 'react-bootstrap'

const Order = () => {
    const { orders } = useSelector((state) => state.getUserOrdersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders())
    console.log(orders)
  }, [dispatch])
  console.log(orders)
  return (
    <>
      {orders &&
        orders.map((order) => (
          <Container style={{marginTop: "15px"}}>
            <Row>
              <Col md={4}>
                {order.orderItems.map((item) => (
                  <>
                    <h5>
                      {item.name} [{item.varient}] * {item.quantity} ={" "}
                      {item.price}
                    </h5>
                    <hr/>
                  </>
                ))}
              </Col>
            </Row>
          </Container>
        ))}
    </>
  );
}

export default Order