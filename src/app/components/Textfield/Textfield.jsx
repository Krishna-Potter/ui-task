"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { fetchingData } from "@/app/services/services";
import PageLoader from "../Loader/PageLoader";

const Textfield = () => {
  const [paymentData, setPaymentData] = useState({});
  const [customInput, setCustomInput] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPaymentData = async () => {
    setLoading(true);
    await fetchingData()
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);

          // original data
          const apiData = res.data.payment;
          setPaymentData(apiData);

          // destructured data
          const { deposit } = apiData;
          const customInputVal = deposit[0].custom_input;
          setCustomInput(customInputVal);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPaymentData();
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader loading={loading} />
      ) : (
        <>
          {customInput.map((inputValues, index) => (
            <TextField
              id="outlined-basic"
              label={inputValues.label}
              variant="outlined"
              key={index}
              className={inputValues.dom_attributes}
              value={inputValues.type}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Textfield;
