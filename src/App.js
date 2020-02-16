import React, { useState, useEffect } from "react";

import { TodoList, TodoForm } from "./Containers/index";

import { defaultTodos, defaultId } from "./data/defaultState";

import { createTodo, deleteTodo, sortTodos } from "./handlers/index.js";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || defaultTodos
  );
  const [id, setId] = useState(defaultId);

  useEffect(() => {}, [id, todos]);

  const handleCreate = (e, text, priority, priorityValue) => {
    e.preventDefault();
    createTodo(text, priority, priorityValue, setTodos, todos, setId, id);
  };

  const handleDelete = id => {
    deleteTodo(id, todos, setTodos);
  };

  const handleSort = sortBy => {
    sortTodos(sortBy, todos, setTodos);
  };

  return (
    <div className="App">
      <TodoForm handleCreate={handleCreate} handleSort={handleSort} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
