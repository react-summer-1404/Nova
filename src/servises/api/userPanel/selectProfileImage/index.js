import instance from "../../../../core/interceptor/interceptor";


export const postUserImageSelect = async (formData) => {
  const response = await instance.post(
   "/SharePanel/SelectProfileImage",
   formData,
   {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
  );
  return response.data;
};