import instance from "../../../core/interceptor/interceptor";

export const getCourses = async (apiParams = {}) => {
  const response = await instance.get("/Home/GetCoursesWithPagination", {
    params: apiParams,
  });
  return response.data;
};