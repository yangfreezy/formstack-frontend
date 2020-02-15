import React, { useState } from "react";

import { Selection, InputBar } from "../../Components/index";

import {
  initialPriority,
  initialPriorityValue,
  initialSortByState,
  initialTodoText
} from "../../Data/initialState";

import "../../styles.css";

const TodoForm = ({ createTodo, sortTodos }) => {
  const [sortBy, setSortBy] = useState(initialSortByState);
  const [priority, setPriority] = useState(initialPriority);
  const [priorityValue, setPriorityValue] = useState(initialPriorityValue);
  const [todoText, setTodoText] = useState(initialTodoText);

  const handleSortChange = e => {
    setSortBy(e.target.value);
    sortTodos(e.target.value);
  };

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
