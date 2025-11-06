import instance from "../../../../core/interceptor/interceptor";


export const postUserImage = async (formData) => {
  const response = await instance.post(
   "/SharePanel/AddProfileImage",
   formData,
   {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
  );
  return response.data;
};