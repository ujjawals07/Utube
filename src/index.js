import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import Reducers from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(thunk))
);
const root = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(root);
ReactRoot.render(
  <Provider store={store}>
    <App />
    
  </Provider>
);
