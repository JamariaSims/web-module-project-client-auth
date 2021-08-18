import axios from "axios";
import createNewUser from "./Auth";

export const SET_USER_START = "SET_USER_START";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAIL = "SET_USER_FAIL";

export const setCurrentUser = (userData) => (dispatch) => {
  dispatch({ type: SET_USER_START });
  axios({
    method: "post",
    url: "http://localhost:5000/api/login",
    data: { userData },
    headers: {
      authorization:
        "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ",
    },
  })
    .then((response) => {
      console.log(response.data);
      dispatch({ type: SET_USER_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: SET_USER_FAIL, payload: error });
    });
};
