import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import Reducers from "./Reducers";

const root = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(root);
ReactRoot.render(
  <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>
);
