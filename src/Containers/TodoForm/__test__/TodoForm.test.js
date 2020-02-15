import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./../TodoForm";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoForm />, div);
});

it("renders two selections and an input bar", () => {
  const { getByTestId } = render(<TodoForm />);
  expect(getByTestId("TodoForm-Form")).toContainElement(
    getByTestId("Selection-Select-sort")
  );
  expect(getByTestId("TodoForm-Form")).toContainElement(
    getByTestId("Selection-Select-priority")
  );
  expect(getByTestId("TodoForm-Form")).toContainElement(
    getByTestId("InputBar-TextField")
  );
});
