import React, { useState } from "react";
import { List } from "@material-ui/core";

import { TodoItem } from "../../Components";

import { defaultSelected } from "../../Data/defaultState";

const TodoList = ({ todos, deleteTodo, setTodos }) => {
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
          handleDelete={() => deleteTodo(todo.id)}
        />
      ))}
    </List>
  );
};

export default TodoList;
