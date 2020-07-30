import React from "react";

const ItemTodo = (props) => {
  return (
    <li className="collection-item">
      <button className="waves-effect waves-light btn-small secondary-content red">
        <i className="material-icons">delete</i>
      </button>
    </li>
  );
};

export default ItemTodo;
