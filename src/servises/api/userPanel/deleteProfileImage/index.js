import instance from "../../../../core/interceptor/interceptor";

export const deleteUserImageSelect = async (formData) => {
    const response = await instance.delete("/SharePanel/DeleteProfileImage", {
      data: formData, 
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };