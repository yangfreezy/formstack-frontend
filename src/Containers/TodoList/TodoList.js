import React, { useState } from "react";
import { List } from "@material-ui/core";

import { initialSelectedState } from "../../Data/initialState";
import { TodoItem } from "../../Components";

const TodoList = ({ todos, deleteTodo }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedState);

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
