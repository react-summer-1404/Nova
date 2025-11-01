import axios from "axios";
import instance from "../../../../../core/interceptor/interceptor";

export const sendVerifyMessage = async ({ gmail }) => {
  const response = await instance.post("/Sign/SendVerifyMessage", {
    gmail,
  });
  return response.data;
};
