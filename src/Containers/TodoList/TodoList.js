import React, { useState } from "react";

import { List } from "@material-ui/core";

import { TodoItem } from "../../Components";

import { defaultSelected } from "../../Data/defaultState.js";

const TodoList = ({ todos, handleDelete, setTodos }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

  const handleListItemClick = index => {
    setSelectedIndex(index);
  };

  return (
    <List data-testid="TodoList-List" component="nav" aria-label="Todos">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          selected={selectedIndex === todo.id}
          handleClick={() => handleListItemClick(todo.id)}
          handleDelete={() => handleDelete(todo.id)}
        />
      ))}
    </List>
  );
};

export default TodoList;
