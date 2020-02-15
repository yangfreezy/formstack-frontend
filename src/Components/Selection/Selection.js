import React, { Fragment } from "react";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

const Selection = ({
  inputLabelText,
  id,
  labelId,
  options,
  handleChange,
  value
}) => {
  const inputLabelMargin = { margin: 6 };
  return (
    <Fragment>
      <InputLabel
        data-testid={"Selection-InputLabel"}
        id={labelId}
        style={inputLabelMargin}
      >
        {inputLabelText}
      </InputLabel>
      <Select
        data-testid={"Selection-Select-" + id}
        labelId={labelId}
        id={id}
        value={value}
        onChange={handleChange}
        style={inputLabelMargin}
      >
        {options.map((option, i) => {
          return (
            <MenuItem value={option} key={i}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </Fragment>
  );
};

export default Selection;
