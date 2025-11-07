import instance from "../../../core/interceptor/interceptor";

export const getTeachersDetail = async (teacherId ) => {
  const response = await instance.get("/Home/GetTeacherDetails", {
    params: { TeacherId:teacherId },
  });
  return response.data;
};
