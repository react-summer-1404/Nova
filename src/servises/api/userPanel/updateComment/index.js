import instance from "../../../../core/interceptor/interceptor";

export const putEditComment = async (formData) => {
    const response = await instance.put(
      "/Course/UpdateCourseComment",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  };
  