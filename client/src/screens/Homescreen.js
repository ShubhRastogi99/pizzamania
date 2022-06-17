import React, {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PizzaCards from '../components/PizzaCards'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPizzasaction } from '../actions/pizzaactions'
import Filters from '../components/Filters'

const Homescreen = () => {
  const dispatch = useDispatch();
  const { pizzas, loading, error } = useSelector(
    (state) => state.getAllPizzasreducer
  );

  useEffect(() => {
    dispatch(getAllPizzasaction());
    console.log("pizza", pizzas);
    console.log(loading)
  }, [dispatch])
  
  return (
    <>
      <Container style={{ margin: "auto" }}>
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>Error Occured</h3>
        ) : (
          <Row className="align-item-center">
            <Filters />
            {pizzas.map((pizza) => (
              <Col xs={12} sm={12} md={6} lg={4}>
                <PizzaCards pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Homescreen