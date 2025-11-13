import instance from "../../../core/interceptor/interceptor";

export const postAddToFavorite = async (courseId) => {
  const response = await instance.post("/Course/AddCourseFavorite", {
    courseId,
  });
  return response.data;
};

export const deleteAddToFavorite = async (CourseFavoriteId) => {
  const formData = new FormData();
  formData.append("CourseFavoriteId", CourseFavoriteId);

  const response = await instance.delete("/Course/DeleteCourseFavorite", {
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

