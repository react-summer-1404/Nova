import axios from "axios";
import instance from "./../../../core/interceptor/interceptor";

export const getBlogs = async () => {
  const response = await instance.get("/News", {
    params: apiParams,
  });
  return response.data;
};
