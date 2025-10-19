import instance from "../../../../core/interceptor/interceptor";

export const getTechs = async () => {
    const response = await instance.get("/Home/GetTechnologies");
    console.log("API Response:", response.data);
    return response.data;
  };