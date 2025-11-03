import instance from "../../../../core/interceptor/interceptor";

export const getCategoryId = async (id) => {
  const response = await instance.get(`/News/GetNewsWithCategory/:${id}`, {
    params: apiParams
  });
  return response.data;
};
