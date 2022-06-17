import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deliverorder, getallUserOrders } from '../../actions/orderAction'
import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap';

const Orderlist = () => {
    const dispatch = useDispatch()
    const { orders } = useSelector((state) => state.getallUserOrdersReducer);

    useEffect(() => {
        dispatch(getallUserOrders())
    }, [dispatch])

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order id</th>
            <th>Email</th>
            <th>User id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.transactionId}</td>
                <td>rs {order.orderamount}/-</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.isDeliverd ? (<h6>Delivered</h6>) : (<Button onClick={() => {dispatch(deliverorder(order._id))}}>Deliver</Button>)}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Orderlist