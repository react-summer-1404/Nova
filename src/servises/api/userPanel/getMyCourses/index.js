import instance from "../../../../core/interceptor/interceptor";

export const getMyCourses = async (apiParams) => {
  const response = await instance.get("/SharePanel/GetMyCourses", {
    params: apiParams,
  });
  return response.data;
};
