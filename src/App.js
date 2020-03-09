import React, { useState, useEffect } from "react";

import { TodoList, TodoForm } from "./Containers";
import { Layout } from "./Layouts";
import { defaultTodos, defaultId } from "./Data/defaultState";
import { createTodo, deleteTodo, sortTodos } from "./Handlers";

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
    <Layout stylesClass="App">
      <TodoForm handleCreate={handleCreate} handleSort={handleSort} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </Layout>
  );
}

export default App;
