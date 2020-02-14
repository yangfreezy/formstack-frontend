import React, { useState } from "react";

import { List, ListItem, ListItemText, Button } from "@material-ui/core";

const TodoList = ({ todos, deleteTodos }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav" aria-label="Todos">
      {todos.map(todo => (
        <ListItem
          button
          selected={selectedIndex === todo.id}
          onClick={e => handleListItemClick(e, todo.id)}
        >
          <ListItemText
            primary={todo.text}
            secondary={"Priority: " + todo.priority}
          />
          <Button onClick={e => deleteTodos(e, todo.id)}> Delete </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
