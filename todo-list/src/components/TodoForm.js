import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../views/todo-view/todoListSlice";

const TodoForm = () => {
  return (
    <div className="row">
      <div className="input-field col s10 ">
        <input placeholder="Just do it !" type="text" />
      </div>
      <br></br>
      <div className="col s2">
        <button className="btn waves-effect waves-light pink lighten-1">
          Submit
        </button>
      </div>
    </div>
  );
};
export default TodoForm;
