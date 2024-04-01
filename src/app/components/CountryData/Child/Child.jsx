"use client";
import React from "react";
import { TextField, Switch } from "@mui/material";

export const OptionBox = ({ value }) => {
  return (
    <TextField
      id="filled-select-currency"
      label={value}
      variant="filled"
      size="small"
      color="secondary"
      value={value}
    />
  );
};

export const ToggleButton = ({ mode }) => {
  const label = { inputProps: { "aria-label": "Color switch" } };

  return <Switch {...label} defaultChecked={mode} color="secondary" />;
};
