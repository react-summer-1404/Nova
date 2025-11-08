import instance from "../../../../core/interceptor/interceptor";

export const postChangePassWord = async (apiData) => {
  const response = await instance.post("/SharePanel/ChangePassword", apiData);
  return response.data;
};
