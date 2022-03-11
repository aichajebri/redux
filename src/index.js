import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import rootReducer from "./reducers";
import ItemList from "./components/ItemList";
import "./index.css";
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <hr />
    <ItemList />
  </Provider>,
  document.getElementById("root")
);
