import React from "react";
import "./App.css";
import TodoList from "../todo-view/TodoList";
import TodoForm from "../../components/TodoForm";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>My Todo list</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
