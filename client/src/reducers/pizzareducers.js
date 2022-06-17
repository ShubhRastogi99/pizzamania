export const getAllPizzasreducer = (state = {pizzas: []}, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZA_SUCCESS":
      return {
        loading: false,
        pizzas: action.payload,
      };
    case "GET_PIZZAS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addPizzasreducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PIZZA_SUCCESS":
      return {
        loading: false,
      };
    case "ADD_PIZZAS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getpizzabyidreducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZABYID_SUCCESS":
      return {
        loading: false,
        pizza: action.payload,
      };
    case "GET_PIZZABYID_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updatepizzabyidreducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PIZZA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_PIZZA_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "UPDATE_PIZZAS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};