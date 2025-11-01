import instance from "../../../core/interceptor/interceptor";

export const postAddToFavorite = async (courseId) => {
  const response = await instance.post("/Course/AddCourseFavorite", {
    courseId,
  });
  return response.data;
};
