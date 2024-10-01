import axios from "axios";

const axiosInstance = axios.create({
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("admin_token");
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
