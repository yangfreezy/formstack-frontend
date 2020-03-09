import React from "react";

import { TextField } from "@material-ui/core";

const InputBar = ({ handleChange, margin, placeholder, value }) => {
  const textFieldMargin = { margin: 16 };
  return (
    <TextField
      data-testid="InputBar-TextField"
      onChange={handleChange}
      style={textFieldMargin}
      placeholder={placeholder}
      fullWidth
      value={value}
      required={true}
    />
  );
};

export default InputBar;
