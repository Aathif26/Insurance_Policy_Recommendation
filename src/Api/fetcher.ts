import axios from "axios";

export const AXIOS_CLIENT = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL ,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});




