import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../Actions";
const intialState = {
  username: "",
  password: "",
};
const mapStateToProp = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};
function LoginForm(props) {
  const { username, password } = props;
  const [user, setUser] = useState(intialState);
  const onInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onInputSubmit = () => {
    props.setCurrentUser(user);
  };
  return (
    <div className={"Login"}>
      <form>
        <label>
          Username
          <input type="text" name="username" onChange={onInputChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={onInputChange} />
        </label>
        <button type="button" onClick={onInputSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default connect(mapStateToProp, { setCurrentUser })(LoginForm);
