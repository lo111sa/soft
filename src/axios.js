import axios from "axios";

//https://kind-lime-puppy-slip.cyclic.app/api
const instance = axios.create({
  //baseURL: "http://10.1.10.10:8000/api",
  baseURL: "http://94.43.207.20:8000/api",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = "uxlhvAW0UAf7A3cA"; //window.localStorage.getItem("token");

  return config;
});

export default instance;
