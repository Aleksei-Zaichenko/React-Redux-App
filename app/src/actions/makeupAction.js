import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then(res => {
        console.log(res.data);
        dispatch({ type: UPDATE_PRODUCTS, payload: res.data });
      })
      .catch(err => {
        console.error("error fetching data from api, err: ", err);
        dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
      });
  };