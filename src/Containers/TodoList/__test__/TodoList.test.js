import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./../TodoList";

import { defaultTodos } from "../../../data/defaultState";

import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoList todos={defaultTodos} />, div);
});

it("renders multiple todos", () => {
  const { getByTestId } = render(<TodoList todos={defaultTodos} />);
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
