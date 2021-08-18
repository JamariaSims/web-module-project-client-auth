import { SET_USER_START, SET_USER_SUCCESS, SET_USER_FAIL } from "./Actions";
const initialState = {
  user: { username: "", password: "" },
  isPosting: false,
  error: "",
  token: null,
};

const Reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_USER_START:
      return {
        ...state,
        isPosting: true,
      };
    case SET_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default Reducer;
