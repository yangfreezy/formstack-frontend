import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import InputBar from "./../InputBar";

const testData = {
  value: "test",
  placeholder: "test placeholder",
  textFieldMargin: { margin: 1 }
};

const { value, placeholder, textFieldMargin } = testData;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputBar />, div);
});

it("renders options", () => {
  const { getByTestId } = render(
    <InputBar
      style={textFieldMargin}
      placeholder={placeholder}
      fullWidth
      value={value}
      required={true}
    />
  );
  expect(getByTestId("InputBar-TextField")).toHaveStyle("margin: 16px");
});
