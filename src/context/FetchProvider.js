import axios from "axios";
import React, { createContext } from "react";

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const authAxios = axios.create({
    baseURL: "https://doctors-hub-server.vercel.app/api/v1/",
  });
  return <Provider value={{ authAxios }}>{children}</Provider>;
};

export { FetchContext, FetchProvider };
