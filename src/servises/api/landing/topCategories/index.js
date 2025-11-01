import instance from "../../../../core/interceptor/interceptor";

export const getTechs = async () => {
  console.log("getTech called");
  const response = await instance.get("/Home/GetTechnologies");
  return response.data;
};

