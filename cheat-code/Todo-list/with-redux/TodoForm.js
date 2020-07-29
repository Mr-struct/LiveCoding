import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  return (
    <div className="row">
      <div className="input-field col s10 ">
        <input
          ref={inputRef}
          placeholder="Just do it !"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <br></br>
      <div className="col s2">
        <button
          className="btn waves-effect waves-light pink lighten-1"
          onClick={() => {
            dispatch(addTodo({ id: new Date(), value: inputValue }));
            setInputValue("");
            inputRef.current.focus();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default TodoForm;
