import instance from "../../../../core/interceptor/interceptor";

export const getTopCourses = async () => {
  const response = await instance.get("/Home/GetCoursesTop?Count=5", {
    
  });
  return response.data;
};