import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import { userLogin } from '../actions/userAction'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      window.location.href = '/'
    }
  }, [])

  const loginHandler = () => {
    const user = {email, password}
    dispatch(userLogin(user))
  }

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={loginHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Login