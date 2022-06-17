import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {userRegister} from '../actions/userAction'
import {useSelector, useDispatch} from 'react-redux'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch()

    const registerHandler = (e) => {
        e.preventDefault();
        if(password !== confirmpassword){
            alert("Passwords do not match");
        }    
        else {
            const user = {name, email, password, confirmpassword}
            console.log(user)
            dispatch(userRegister(user))
            setName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }
    }
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={registerHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Register