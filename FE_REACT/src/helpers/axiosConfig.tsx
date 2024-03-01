import axios from 'axios';
import { toastifyError } from "helpers/toastify";

axios.interceptors.request.use(
  (config: any) => {
    config.headers = {
        ...config.headers,
        Authorization: `${process.env.REACT_APP_AUTH_TOKEN}`
      };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toastifyError(error.response.statusText || "Internal server error!")
    return Promise.reject(error);
  }
);

export default axios;