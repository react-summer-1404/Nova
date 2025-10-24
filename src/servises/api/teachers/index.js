import instance from "../../../core/interceptor/interceptor";

export const getTeachers = async (apiParams ) => {
  const response = await instance.get("/Home/GetTeachers", {
    params: apiParams,
  });
  return response.data;
};
