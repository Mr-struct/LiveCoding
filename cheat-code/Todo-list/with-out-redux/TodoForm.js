import React, { useState } from "react";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const { addFunction } = props;
  return (
    <div className="row">
      <div className="input-field col s10 ">
        <input
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
          onClick={() => addFunction({ id: new Date(), value: inputValue })}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default TodoForm;
