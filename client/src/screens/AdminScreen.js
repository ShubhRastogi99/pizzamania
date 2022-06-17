import React, { useEffect } from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Buttongroup from './Buttongroup';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Userlist from '../components/admin/Userlist';
import Pizzalist from '../components/admin/Pizzalist';
import Orderlist from '../components/admin/Orderlist';
import Addnewpizza from '../components/admin/Addnewpizza';
import {useSelector} from 'react-redux'
import EditPizza from '../components/admin/EditPizza';

const AdminScreen = () => {
  const userState = useSelector((state) => state.userLoginReducer);
  const {currentUser} = userState

  useEffect(() => {
    if(localStorage.getItem('currentUser') === null || !currentUser.isAdmin){
        window.location.href = "/"
    }
  }, [])
  return (
    <>
      <Container>
        <BrowserRouter>
          <Row>
            <h3 className="text-center bg-dark text-light p-2">Admin Panel</h3>
            <Col md={3}>
              <Buttongroup />
            </Col>
            <Col md={9}>
              <Switch>
                <Route path="/admin/userlist" component={Userlist} exact />
                <Route path="/admin/pizzalist" component={Pizzalist} exact />
                <Route path="/admin/orderlist" component={Orderlist} exact />
                <Route path="/admin/edit/:pizzaId" component={EditPizza} exact />
                <Route
                  path="/admin/addnewpizza"
                  component={Addnewpizza}
                  exact
                />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default AdminScreen