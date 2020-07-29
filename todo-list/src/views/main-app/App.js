import React from "react";
import "./App.css";
import TodoList from "../todo-view/TodoList";
import TodoForm from "../../components/TodoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo list</h1>
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
