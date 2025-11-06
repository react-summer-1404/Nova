import instance from "../../../../core/interceptor/interceptor";

export const putEditProfile = async (formData) => {
  const response = await instance.put(
    "/SharePanel/UpdateProfileInfo",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
