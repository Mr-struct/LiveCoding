import React from "react";
import { deleteTodo } from "../views/todo-view/todoListSlice";
import { useDispatch } from "react-redux";
const ItemTodo = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  return (
    <li className="collection-item">
      {item.value}
      <button
        className="waves-effect waves-light btn-small secondary-content red"
        onClick={() => dispatch(deleteTodo(item.id))}
      >
        <i className="material-icons">delete</i>
      </button>
    </li>
  );
};

export default ItemTodo;
