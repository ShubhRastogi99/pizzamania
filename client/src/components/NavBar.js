import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import Badge from "react-bootstrap/Badge";
import { userLogout } from '../actions/userAction';

const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cartReducer)
  const { currentUser } = useSelector((state) => state.userLoginReducer);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>
              <h4>PizzaMania</h4>
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ? (
              <LinkContainer to="/" activeClassName>
                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                  <LinkContainer to="/myorder" activeClassName>
                    <NavDropdown.Item href="#myorder">Order</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(userLogout());
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </LinkContainer>
            ) : (
              <>
                <LinkContainer to="/register" activeClassName>
                  <Nav.Link>register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login" activeClassName>
                  <Nav.Link>login</Nav.Link>
                </LinkContainer>
              </>
            )}
            <LinkContainer to="/cart" activeClassName>
              <Nav.Link>
                <AiOutlineShoppingCart />
                cart{" "}
                <Badge style={{ background: "grey" }}>
                  {cartState.cartItems.length}
                </Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar