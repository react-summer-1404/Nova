import instance from "../../../../core/interceptor/interceptor";

export const getNewsCategory = async (apiParams ) => {
  const response = await instance.get("/News/GetListNewsCategory", {
    params: apiParams,
  });
  return response.data;
};
