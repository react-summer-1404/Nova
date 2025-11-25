import instance from "../../../../core/interceptor/interceptor";

export const postReserveCourse = async (courseId) => {
    const response = await instance.post(
      "/CourseReserve/ReserveAdd",
      { courseId }
    );
    return response.data;
  };
  
  export const deleteReserveCourse = async (id) => {
    const response = await instance.delete("/CourseReserve", {
      data: { id },
    });
    return response.data;
  };
  
  