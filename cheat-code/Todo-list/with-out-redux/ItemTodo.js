import React from "react";

const ItemTodo = (props) => {
  const { item, deleteFunction } = props;
  return (
    <li className="collection-item">
      {item.value}
      <button
        className="waves-effect waves-light btn-small secondary-content red"
        onClick={() => deleteFunction(item.id)}
      >
        <i className="material-icons">delete</i>
      </button>
    </li>
  );
};

export default ItemTodo;
