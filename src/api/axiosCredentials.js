import axios from "axios";

const urlDev = import.meta.env.VITE_URLD;
const urlProduction = import.meta.env.VITE_URLP;

const instance = axios.create({
  baseURL: urlDev,
  withCredentials: true,
});

export default instance;
