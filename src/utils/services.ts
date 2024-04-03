import axios from "axios";
import { ExchangeResponse } from "../interfaces";

export const getExchange = (fromCurrency: string, toCurrency: string) => {
  const params = {
    function: "CURRENCY_EXCHANGE_RATE",
    from_currency: fromCurrency,
    to_currency: toCurrency,
    apikey: process.env.REACT_APP_API_KEY,
  }
  return axios.get<ExchangeResponse>(
    `https://www.alphavantage.co/query`,
    { params }
  );
};
