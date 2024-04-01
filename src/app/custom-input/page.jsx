import React from "react";
import { Grid } from "@mui/material";
import Textfield from "../components/Textfield/Textfield";
import "./custom-input.css";

const CustomInputPage = () => {
  return (
    <>
      <Grid container className="parent-container">
        <Grid item xs={12} md={12} className="sub-container">
          <div className="custom-input">
            <h2>Custom Input Data</h2>
            <Textfield />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomInputPage;
