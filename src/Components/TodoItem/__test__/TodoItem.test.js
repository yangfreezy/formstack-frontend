import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./../TodoItem";

import { render } from "@testing-library/react";

const testTodo = {
  id: 0,
  priority: "Low",
  priorityValue: 1,
  text: "test todo"
};
const { id, text, priority } = testTodo;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoItem todo={testTodo} />, div);
});

it("renders options", () => {
  const { getByTestId } = render(<TodoItem todo={testTodo} />);
  expect(getByTestId("TodoItem-ListItem-" + id)).toContainElement(
    getByTestId("TodoItem-ListItemText-" + id)
  );
  expect(getByTestId("TodoItem-ListItemText-" + id)).toHaveTextContent(text);
  expect(getByTestId("TodoItem-ListItemText-" + id)).toHaveTextContent(
    priority
  );
});
