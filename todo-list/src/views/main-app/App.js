import React from "react";
import "./App.css";
import TodoList from "../todo-view/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo list</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
