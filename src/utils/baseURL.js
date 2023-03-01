import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://doctors-hub-server.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

export default baseURL;

// how to use baseURL. of axios in react