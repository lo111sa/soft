import axios from "axios";

//https://kind-lime-puppy-slip.cyclic.app/api
const instance = axios.create({
  //baseURL: "http://localhost:8000/api",
  baseURL: "https://api.losa.ge/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = "uxlhvAW0UAf7A3cA"; //window.localStorage.getItem("token");

  return config;
});

export default instance;
