import React, { useState } from "react";
import ItemTodo from "../../components/ItemTodo";
import TodoForm from "../../components/TodoForm";

const TodoList = () => {
  const [list, setList] = useState([
    { id: 1, value: "hello" },
    { id: 2, value: "world" },
  ]);

  function deleteItem(id) {
    setList(list.filter((x) => x.id !== id));
  }

  function addItem(item) {
    setList([...list, item]);
  }
  return (
    <div className="container">
      <TodoForm addFunction={addItem} />
      <ul className={"collection"}>
        {list.map((x) => (
          <ItemTodo key={x.id} item={x} deleteFunction={deleteItem} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
