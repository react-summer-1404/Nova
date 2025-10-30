import axios from "axios";
import instance from "./../../../core/interceptor/interceptor";

export const getBlogs = async (apiParams) => {
  const response = await instance.get("/News", {
    params: apiParams
  });
  return response.data;
};
