import axios from 'axios';
import swal from "sweetalert";

export const getAllPizzasaction = () => async (dispatch) => {
    dispatch({type: 'GET_PIZZAS_REQUEST'})
    try {
        console.log('here')
        const {data} = await axios.get("/api/pizzas/getPizzas");
        console.log(data);
        dispatch({type: 'GET_PIZZA_SUCCESS', payload: data})
    } catch(err) {
        dispatch({type: 'GET_PIZZAS_FAIL', payload: err})
    }
}

export const addPizzasaction = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    console.log("here");
    const { data } = await axios.post("/api/pizzas/addPizza", {pizza});
    console.log(data);
    dispatch({ type: "ADD_PIZZA_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
  }
};

export const getpizzabyidaction = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    console.log("here");
    const { data } = await axios.post("/api/pizzas/getpizzabyid", { pizzaId });
    console.log(data);
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
  }
};

export const updatePizzasaction = (updatedpizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZA_REQUEST" });
  try {
    console.log("here");
    const { data } = await axios.post("/api/pizzas/updatepizza", { updatedpizza });
    console.log(data);
    dispatch({ type: "UPDATE_PIZZA_SUCCESS", payload: data });
    window.location.href = "/admin/pizzalist"
  } catch (err) {
    dispatch({ type: "UPDATE_PIZZAS_FAIL", payload: err });
  }
};

export const deletePizza =  (pizzaId) => async(dispatch) => {
    try {
        const res = await axios.post("/api/pizzas/deletepizza", {pizzaId})
        swal("Pizza Deleted!", "success");
        window.location.href = "/admin/pizzalist"
    } catch(err){
        swal("Something Went Wrong", "error");
        console.log(err)
    }
}

export const filterPizza = (searchkey, category) => async(dispatch) => {
  let filteredpizza;
  dispatch({type: 'GET_PIZZAS_REQUEST'})
  try {
    const res = await axios.get("/api/pizzas/getPizzas");
    filteredpizza = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchkey))
    if(category !== 'all'){
      filteredpizza = res.data.filter((pizza) => pizza.category.toLowerCase() === category)
    }
    dispatch({type: "GET_PIZZA_SUCCESS", payload: filteredpizza})
  } catch(err) {
    dispatch({type: "GET_PIZZAS_FAIL", payload: err})
  }
}