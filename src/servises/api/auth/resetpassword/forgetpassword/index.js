import axios from "axios";
import instance from "../../../../../core/interceptor/interceptor";

export const forgetPasswordEmail = async ({ email,baseUrl }) => {
  const response = await instance.post("/Sign/ForgetPassword", {
    email,
    baseUrl,
  });
  return response.data;
};
