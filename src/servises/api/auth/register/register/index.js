import axios from "axios";
import instance from "../../../../../core/interceptor/interceptor";

export const signUpCompleteRequest = async ({ password, gmail, phoneNumber }) => {
  const response = await instance.post("/Sign/Register", {
    password,
    gmail,
    phoneNumber,
  });
  return response.data;
};
