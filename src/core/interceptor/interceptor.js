   import axios from "axios";
import { getToken, removeToken } from "../../hooks/localStorage";
const BASE_URL =import.meta.env.VITE_API_URL

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (data) => {
    return data;
  },

  (error) => {
    if (error.response.status === 401) {
      removeToken("token");
    }
    if (error.response.status >= 404 && error.response.status < 500) {
      console.log("Client Error:", error.response.status);
    }
    return Promise.reject(error);
  }
);
export default instance;
