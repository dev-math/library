import Axios from "axios";
import storage from '@/utils/storage';

const axios = Axios.create({
  baseURL: "http://localhost:8080/api",
});

const authRequestInterceptor = (config) => {
  const token = storage.getToken();

  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
};

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default axios;
