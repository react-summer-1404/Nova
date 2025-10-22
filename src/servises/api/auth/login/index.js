import axios from "axios";
import instance from "../../../../core/interceptor/interceptor";

export const login = async ({ phoneOrGmail, password, rememberMe }) => {
  const response = await instance.post("/Sign/Login", {
    phoneOrGmail,
    password,
    rememberMe,
  });
  return response.data;
};

