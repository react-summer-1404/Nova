import instance from "../../../../core/interceptor/interceptor";

export const getMyReserveCourses = async() => {
    const response = await instance.get("/SharePanel/GetMyCoursesReserve")
    return response.data
}