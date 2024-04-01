"use client";
import { fetchingData } from "@/app/services/services";

import React, { useEffect, useState } from "react";
import "./country-data.css";
import { OptionBox, ToggleButton } from "./Child/Child";
import PageLoader from "../Loader/PageLoader";

const CountryData = () => {
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
          const customInputVal = deposit[0].country_sorting;
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
          <div className="country-parent-container">
            <span>name</span>
            <span>action</span>
            <span>sort</span>
          </div>
          {customInput.map((data, index) => {
            return (
              <div className="content-container" key={index}>
                <div className="title-section">
                  <OptionBox value={data.country} />
                </div>
                <div className="action-section">
                  <ToggleButton mode={data.action} />
                </div>
                <div className="value-section">
                  <span>{data.sort}</span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default CountryData;
