import React, { useState, useEffect } from "react";

import { InputLabel, TextField, Select, MenuItem } from "@material-ui/core";

import "../App.css";

const TodoForm = ({ createTodo, sortTodos }) => {
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [priorityValue, setPriorityValue] = useState(1);
  const [sortBy, setSortBy] = useState("Priority");

  useEffect(() => {
    sortTodos(sortBy);
  }, [sortBy]);

  const handleSortChange = async e => {
    await setSortBy(e.target.value);
  };

  const handleTextChange = e => {
    setTodoText(e.target.value);
  };

  const handlePriorityChange = e => {
    const values = {
      "Very Low": 0,
      Low: 1,
      Medium: 2,
      High: 3,
      "Very High": 4
    };
    setPriority(e.target.value);
    setPriorityValue(values[e.target.value]);
  };

  const styledMargin = { margin: 6 };
  const largeStyledMargin = { margin: 12 };

  return (
    <form
      className="form"
      onSubmit={e => createTodo(e, todoText, priority, priorityValue)}
    >
      <div className="form-options">
        <InputLabel id="sort-label" style={styledMargin}>
          Sort By:
        </InputLabel>
        <Select
          labelId="sort-label"
          id="sort"
          value={sortBy}
          onChange={e => handleSortChange(e)}
          style={styledMargin}
        >
          <MenuItem value="Priority">Priority</MenuItem>
          <MenuItem value="Created">Created</MenuItem>
        </Select>
        <InputLabel id="priority-label" style={styledMargin}>
          Priority:
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={priority}
          style={styledMargin}
          onChange={e => handlePriorityChange(e)}
        >
          <MenuItem value="Very Low">Very Low</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Very High">Very High</MenuItem>
        </Select>
      </div>
      <TextField
        onChange={e => handleTextChange(e)}
        style={largeStyledMargin}
        placeholder="Todo"
        fullWidth
        value={todoText}
        required={true}
      />
    </form>
  );
};

export default TodoForm;
