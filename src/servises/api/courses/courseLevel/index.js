import instance from "../../../../core/interceptor/interceptor";

export const getCourseLevel = async () => {
  const response = await instance.get("/CourseLevel/GetAllCourseLevel");
  return response.data;
};

