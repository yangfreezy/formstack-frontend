import React, { useState } from "react";

import { TodoList, TodoForm } from "./Containers/index";

import { defaultTodos, defaultId } from "./Data/defaultState";

import { createTodo, deleteTodo, sortTodos } from "./Handlers/index.js";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [id, setId] = useState(defaultId);

  const handleCreate = (e, text, priority, priorityValue) => {
    createTodo(e, text, priority, priorityValue, setTodos, todos, setId, id);
  };

  const handleDelete = id => {
    deleteTodo(id, todos, setTodos);
  };

  const handleSort = sortBy => {
    sortTodos(sortBy, todos, setTodos);
  };

  return (
    <div className="App">
      <TodoForm createTodo={handleCreate} sortTodos={handleSort} />
      <TodoList todos={todos} deleteTodo={handleDelete} />
    </div>
  );
}

export default App;
