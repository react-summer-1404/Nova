import instance from "../../../core/interceptor/interceptor";

export const getTeachersDetail = async (TeacherId ) => {
  const response = await instance.get("/Home/GetTeacherDetails", {
    params: { TeacherId },
  });
  return response.data;
};
