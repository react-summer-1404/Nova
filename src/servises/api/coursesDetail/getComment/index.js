import instance from "../../../../core/interceptor/interceptor";
export const getCourseDetailComment = async (courseId) => {
    const response = await instance.get("/Course/GetCourseCommnets",{
        params:{courseId},
    });
    return response.data;
}