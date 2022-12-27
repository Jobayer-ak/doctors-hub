import axios from "axios";
import React, { createContext } from "react";

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const authAxios = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
  });
  return <Provider value={{ authAxios }}>{children}</Provider>;
};

export { FetchContext, FetchProvider };
