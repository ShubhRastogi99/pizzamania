import React, {useState} from 'react'
import {Card, Button, Row, Col, Modal} from 'react-bootstrap'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

const PizzaCards = ({pizza}) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
   const [show, setShow] = useState(false);
   const dispatch = useDispatch()

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const addToCartfunction = () => {
     dispatch(addToCart(pizza, quantity, varient))
   }

  return (
    <>
      <Card style={{ maxwidth: "18rem", margin: "auto", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "150px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr></hr>
          <Card.Text>
            <Row>
              <Col>
                <h6>Varient</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((val, i) => (
                    <option>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <h6>Price: ₹{pizza.prices[0][varient] * quantity}</h6>
              </Col>
              <Col>
                <Button variant="primary" onClick={() => addToCartfunction()}>
                  <AiOutlineShoppingCart /> Add to cart
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{pizza.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PizzaCards