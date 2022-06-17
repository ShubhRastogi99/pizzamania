import React, {useEffect} from 'react'
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzasaction } from "../../actions/pizzaactions";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Pizzalist = () => {
  const dispatch = useDispatch();
  const { pizzas, loading, error } = useSelector(
    (state) => state.getAllPizzasreducer
  );

  useEffect(() => {
    dispatch(getAllPizzasaction());
    console.log("pizza", pizzas);
    console.log(loading);
  }, [dispatch]);

  return (
    <>
      <Container style={{ margin: "auto" }}>
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>Error Occured</h3>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Pizza Name</th>
                  <th>Prices</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pizzas &&
                  pizzas.map((pizza) => (
                    <tr>
                      <td>
                        <img
                          src={pizza.image}
                          alt="pizza"
                          style={{ width: "140px", height: "100px" }}
                        />
                      </td>
                      <td>{pizza.name}</td>
                      <td>
                        small: {pizza.prices[0]["small"]} <br />
                        medium: {pizza.prices[0]["medium"]} <br />
                        large: {pizza.prices[0]["large"]} <br />
                      </td>
                      <td>{pizza.category}</td>
                      <td>
                        <Link to={`/admin/edit/${pizza._id}`}>
                          <AiFillEdit style={{cursor: "pointer"}}/>
                        </Link>{" "}
                        &nbsp;{" "}
                        <AiFillDelete style={{color: "red", cursor: "pointer"}} onClick={() => dispatch(deletePizza(pizza._id))} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </>
  );
}

export default Pizzalist