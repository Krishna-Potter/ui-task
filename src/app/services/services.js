import axios from "axios";

export const fetchingData = () => {
  return axios.get("http://43.204.243.79:8000/api/v1/payment/transactions/1");
};
