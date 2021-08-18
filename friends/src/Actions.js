import axios from "axios";
import createNewUser from "./Auth";

export const SET_USER_START = "SET_USER_START";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAIL = "SET_USER_FAIL";

export const setCurrentUser = (userData) => (dispatch) => {
  dispatch({ type: SET_USER_START });
  createNewUser(userData)
    .post("http://localhost:5000/api/login", userData)
    .then((response) => {
      dispatch({ type: SET_USER_SUCCESS, payload: response.data.payload });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: SET_USER_FAIL, payload: error });
    });
};
