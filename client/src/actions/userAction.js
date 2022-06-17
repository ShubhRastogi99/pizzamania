import axios from 'axios';
import swal from "sweetalert";

export const userRegister = (user) => async (dispatch) => {
    dispatch({type: 'USER_REGISTER_REQUEST'})
    try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const res = await axios.post('/api/user/register', user, config)
        console.log(res)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
        alert("Registation successful please login")
    } catch(err) {
        dispatch({type: 'USER_REGISTER_FAIL', payload: err})
    }
}

export const userLogin = (user) => async (dispatch) => {
    dispatch({type: 'USER_LOGIN_REQUEST'})
    try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const res = await axios.post('/api/user/login', user, config)
        console.log(res);
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        window.location.href = '/'
    } catch(err) {
        dispatch({ type: "USER_REGISTER_FAIL", payload: err });
    }
}

export const userLogout = () => dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}

export const getallusers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    console.log("here");
    const { data } = await axios.get("/api/user/getallusers");
    console.log(data);
    dispatch({ type: "GET_USERS_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/user/deleteuser", {userid });
    swal("User Deleted!", "success");
    window.location.href = "/admin/userlist";
  } catch (err) {
    swal("Something Went Wrong", "error");
    console.log(err);
  }
};