import axios from "axios";
import instance from "../../../../../core/interceptor/interceptor";

export const verifyCode = async ({gmail,verifyCode}) => {
   try {
    console.log({ gmail, verifyCode });
    const response = await instance.post("/Sign/VerifyMessage", {
      gmail,
      verifyCode,
    });
    return response.data;
  } catch (error) {
    console.error("Verify Code Error:", error.response?.data || error.message);
    throw error;
  }
};

