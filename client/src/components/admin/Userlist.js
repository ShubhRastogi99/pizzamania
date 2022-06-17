import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getallusers } from '../../actions/userAction'
import {Table} from 'react-bootstrap'
import { AiFillDelete } from "react-icons/ai";

const Userlist = () => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.getAllUsersreducer);
  const {users} = userState

  useEffect(() => {
    dispatch(getallusers())
  }, [dispatch])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><AiFillDelete style={{cursor: "pointer", color: "red"}} onClick={() => {dispatch(deleteUser(user._id))}}/></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Userlist