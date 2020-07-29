import React from "react";
import ItemTodo from "../../components/ItemTodo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoOpp = useSelector((state) => state.todoOpp);
  return (
    <div className="container">
      <ul className={"collection"}>
        {todoOpp.map((x) => (
          <ItemTodo key={x.id} item={x} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
