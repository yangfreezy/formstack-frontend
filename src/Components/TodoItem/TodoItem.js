import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";

const TodoItem = ({ todo, selected, handleClick, handleDelete }) => {
  return (
    <ListItem
      data-testid={"TodoItem-ListItem-" + todo.id}
      button
      selected={selected}
      onClick={handleClick}
    >
      <ListItemText
        data-testid={"TodoItem-ListItemText-" + todo.id}
        primary={todo.text}
        secondary={"Priority: " + todo.priority}
      />
      <Button onClick={handleDelete}> Delete </Button>
    </ListItem>
  );
};

export default TodoItem;
