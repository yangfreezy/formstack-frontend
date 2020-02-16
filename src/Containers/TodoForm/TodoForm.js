import React, { useState } from "react";

import { Selection, InputBar } from "../../Components/index";

import {
  defaultPriority,
  defaultPriorityValue,
  defaultSortBy,
  defaultTodoText
} from "../../data/defaultState";

import "../../styles.css";

const TodoForm = ({ createTodo, sortTodos }) => {
  const [todoText, setTodoText] = useState(defaultTodoText);
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [priority, setPriority] = useState(defaultPriority);
  // Priority Value is a numeric equivalent of priority used to sort them
  const [priorityValue, setPriorityValue] = useState(defaultPriorityValue);

  const priorityValues = {
    "Very Low": 0,
    Low: 1,
    Medium: 2,
    High: 3,
    "Very High": 4
  };

  const handlePriorityChange = e => {
    setPriority(e.target.value);
    setPriorityValue(priorityValues[e.target.value]);
  };

  const handleTextChange = e => {
    setTodoText(e.target.value);
  };

  const handleSortChange = e => {
    setSortBy(e.target.value);
    sortTodos(e.target.value);
  };

  return (
    <form
      data-testid="TodoForm-Form"
      className="form"
      onSubmit={e => createTodo(e, todoText, priority, priorityValue)}
    >
      <div className="form-options">
        <Selection
          inputLabelText="Sort By: "
          options={["Priority", "Created"]}
          handleChange={e => handleSortChange(e)}
          labelId="sort-label"
          value={sortBy}
          id="sort"
        />
        <Selection
          inputLabelText="Priority: "
          options={["Very Low", "Low", "Medium", "High", "Very High"]}
          handleChange={e => handlePriorityChange(e)}
          labelId="priority-label"
          value={priority}
          id="priority"
        />
      </div>
      <InputBar
        handleChange={e => handleTextChange(e)}
        placeholder="Todo"
        value={todoText}
      />
    </form>
  );
};

export default TodoForm;
