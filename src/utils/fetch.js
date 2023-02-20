import axios from "axios";

const publicFetch = axios.create({
  baseURL: "https://doctors-hub-server.vercel.app/api/v1/",
});

export { publicFetch };
