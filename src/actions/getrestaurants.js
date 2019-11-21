import { REQUEST_RESTAURANT_PENDING, REQUEST_RESTAURANT_FAILED, REQUEST_RESTAURANT_SUCCESS } from "./constants";

export default function setRestaurants() {
  return function (dispatch) {
    dispatch({ type: REQUEST_RESTAURANT_PENDING });
    fetch("http://localhost:5000/api/v1/restaurants").then(data => data.json())
      .then(data => dispatch({ type: REQUEST_RESTAURANT_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_RESTAURANT_FAILED, payload: error.message }));
  }
 }