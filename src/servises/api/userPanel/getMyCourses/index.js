import instance from "../../../../core/interceptor/interceptor";

export const getMyCourses = async (apiParams) => {
  const response = await response.instance("/SharePanel/GetMyCourses", {
    params: apiParams,
  });
  return response.data;
};
