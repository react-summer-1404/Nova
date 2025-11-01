import instance from "../../../core/interceptor/interceptor";

export const postLike = async (courseId) => {
  const response = await instance.post(
    `/Course/AddCourseLike?CourseId=${courseId}`
  );
  return response.data;
};
export const postDisLike = async (courseId) => {
  const response = await instance.post(
    `/Course/AddCourseDissLike?CourseId=${courseId}`
  );
  return response.data;
};
