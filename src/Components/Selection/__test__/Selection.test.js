import React from "react";
import ReactDOM from "react-dom";
import Selection from "./../Selection";

import { render } from "@testing-library/react";

const testData = {
  inputLabelText: "test label",
  id: "test",
  labelId: "test",
  options: ["0", "1"],
  value: ""
};
const { inputLabelText, id, labelId, options, value } = testData;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Selection
      inputLabelText={inputLabelText}
      id={id}
      labelId={labelId}
      options={options}
      value={value}
    />,
    div
  );
});

it("renders an input label and a selection", () => {
  const { getByTestId } = render(
    <Selection
      inputLabelText={inputLabelText}
      id={id}
      labelId={labelId}
      options={options}
      value={value}
    />
  );
  expect(getByTestId("Selection-InputLabel")).toHaveTextContent(inputLabelText);
  expect(getByTestId("Selection-Select-" + id)).not.toBeEmpty();
});
