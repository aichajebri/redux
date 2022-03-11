import React from "react";
import { connect } from "react-redux";
import { addItems } from "../actions";
import "./App.css";
const App = ({ qty, dispatch }) => {
  let input, item;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    item = {
      text: input.value,
    };
    dispatch(addItems(item));
    input.value = "";
  };

  return (
    <center>
      <div className="h1">
        <h1>TODOS</h1>
        <form onSubmit={handleSubmit}>
          <div className="todo">
            <label className="label">Todo: </label>
            <input type="text" name="name" ref={(node) => (input = node)} />
          </div>
          <div className="sub">
            <label>&nbsp;</label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </center>
  );
};

export default connect()(App);
