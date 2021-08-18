import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import Reducer from "./Reducer";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(Reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
