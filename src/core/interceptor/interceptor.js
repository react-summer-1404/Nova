import axios from "axios";
import { getToken, removeToken } from "../../hooks/localStorage";
import useFavorite from "../store/favoriteStore";
import toast from "react-hot-toast";
import { useEffect } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  console.log(getToken())
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      toast.error("ابتدا لاگین کنید")
      removeToken("token");
      useFavorite().getState().clearFavorite();
      
    } else if (status >= 404 && status < 500) {
      console.log("Client Error:", status);
    }

    return Promise.reject(error);
  }
);
export default instance;
