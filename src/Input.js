import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./index.css";

const Input = ({ value, minvalue, name, onChange, disabled }) => {
  const [isError, setIsError] = useState(false);

  const handlechange = (e) => {
    e.preventDefault();

    if (e.target.value < minvalue) {
      setIsError(true);
      onChange(true, "error");
    } else {
      onChange(parseInt(e.target.value), name);
      setIsError(false);
    }
  };

  return (
    <>
      <TextField
        size="small"
        className="customTextField"
        disabled={disabled}
        error={isError}
        name={name}
        type="number"
        defaultValue={value}
        onChange={(e) => handlechange(e)}
        helperText={isError ? `> ${minvalue}` : ""}
        sx={{ border: "none", "& fieldset": { border: "none" } }}
      />
    </>
  );
};

export default Input;
