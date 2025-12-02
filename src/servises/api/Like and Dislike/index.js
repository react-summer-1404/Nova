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
export const deleteLike = async (courseLikeId) => {
  const formData = new FormData();
  formData.append("CourseLikeId", courseLikeId);

  const response = await instance.delete("/Course/DeleteCourseLike", {
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
