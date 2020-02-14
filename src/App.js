import React, { useState, useEffect } from "react";

import { TodoList, TodoForm } from "./Components/index";
import { initialState, initialId } from "./Data/initialState";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(initialState);
  const [id, setId] = useState(initialId);

  const createTodo = (e, text, priority, priorityValue) => {
    e.preventDefault();
    setTodos([...todos, { id, text, priority, priorityValue }]);
    setId(id + 1);
  };

  const deleteTodos = (e, id) => {
    e.preventDefault();
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const sortTodos = async sortBy => {
    let newTodos = todos.slice();
    if (sortBy === "Priority") {
      newTodos.sort((a, b) => {
        return b.priorityValue - a.priorityValue;
      });
    }
    if (sortBy === "Created") {
      newTodos.sort((a, b) => {
        return a.id - b.id;
      });
    }
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoForm createTodo={createTodo} sortTodos={sortTodos} />
      <TodoList todos={todos} deleteTodos={deleteTodos} />
    </div>
  );
}

export default App;
