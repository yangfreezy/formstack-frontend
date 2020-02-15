import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./../TodoList";

import { initialTodos } from "../../../Data/initialState";

import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoList todos={initialTodos} />, div);
});

it("renders multiple todos", () => {
  const { getByTestId } = render(<TodoList todos={initialTodos} />);
  expect(getByTestId("TodoList-List")).toContainElement(
    getByTestId("TodoItem-ListItem-0")
  );
  expect(getByTestId("TodoList-List")).toContainElement(
    getByTestId("TodoItem-ListItem-1")
  );
  expect(getByTestId("TodoList-List")).toContainElement(
    getByTestId("TodoItem-ListItem-2")
  );
  expect(getByTestId("TodoList-List")).toContainElement(
    getByTestId("TodoItem-ListItem-3")
  );
});
