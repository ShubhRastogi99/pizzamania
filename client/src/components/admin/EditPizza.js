import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getpizzabyidaction,
  updatePizzasaction,
} from "../../actions/pizzaactions";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const EditPizza = ({match}) => {
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [smallprice, setsmall] = useState();
    const [mediumprice, setmedium] = useState();
    const [largeprice, setlarge] = useState();
    const [image, setimage] = useState("");
    const [description, setdes] = useState("");
    const [category, setcategory] = useState("");
    const getpizzabyidstate = useSelector((state) => state.getpizzabyidreducer);
    const {pizza} = getpizzabyidstate;

    const submitForm = (e) => {
      e.preventDefault();
      const updatedpizza = {
        _id: match.params.pizzaId,
        name,
        image,
        description,
        category,
        prices: {
          small: smallprice,
          medium: mediumprice,
          large: largeprice,
        },
      };
      dispatch(updatePizzasaction(updatedpizza));
    };


    useEffect(() => {
        
        if(pizza) {if(pizza._id === match.params.pizzaId){
            setname(pizza.name)
            setcategory(pizza.category)
            setimage(pizza.image)
            setsmall(pizza.prices[0].small)
            setmedium(pizza.prices[0].medium);
            setlarge(pizza.prices[0].large);
            setdes(pizza.description)
        } else {
            dispatch(getpizzabyidaction(match.params.pizzaId));
        }} else {
            dispatch(getpizzabyidaction(match.params.pizzaId));
        }
        
    }, [dispatch, match.params.pizzaId, pizza])

  return (
    <>
      <Form onSubmit={submitForm}>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>

          <Row className="mt-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter small price"
                value={smallprice}
                onChange={(e) => setsmall(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter medium price"
                value={mediumprice}
                onChange={(e) => setmedium(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter large price"
                value={largeprice}
                onChange={(e) => setlarge(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col} className="mt-2" controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image Link"
              value={image}
              onChange={(e) => setimage(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-2" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setdes(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Update</Button>
      </Form>
    </>
  )
}

export default EditPizza