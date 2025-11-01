import axios from "axios";
import instance from "../../../../../core/interceptor/interceptor";

export const forgetPasswordEmail = async ({ email }) => {
  const response = await instance.post("/Sign/ForgetPassword", {
    email,
    baseUrl: "http://localhost:5173/auth/varifycode",
  });
  return response.data;
};
