import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Col, Form, Row, Button} from 'react-bootstrap'
import { filterPizza } from '../actions/pizzaactions'

const Filters = () => {
    const dispatch = useDispatch()
    const [searchkey, setsearch] = useState("")
    const [category, setcategory] = useState("all");
    console.log(category)
  return (
    <div className='p-4 bg-info mt-4'>
      <Form>
        <Row>
          <Col>
            <Form.Control value={searchkey} onChange={e =>setsearch(e.target.value)} placeholder="Search Pizza" />
          </Col>
          <Col>
            <select class="form-select" value={category}
            onChange={e => setcategory(e.target.value)}>
              <option>All</option>
              <option>veg</option>
              <option>nonveg</option>
            </select>
          </Col>
          <Col>
              <Button onClick={() => {dispatch(filterPizza(searchkey, category))}}>Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Filters