import React from "react";
import { Grid } from "@mui/material";
import "../custom-input/custom-input.css";
import CountryData from "../components/CountryData/CountryData";

const CountryDataPage = () => {
  return (
    <>
      <Grid container className="parent-container">
        <Grid item xs={12} md={12} className="sub-container">
          <div className="country-data">
            <h2>Custom Country Data</h2>
            <CountryData />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CountryDataPage;
