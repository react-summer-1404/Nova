import instance from "../../../../core/interceptor/interceptor";
export const getCourseDetailComment = async (courseId) => {
    console.log("CourseCommnets", courseId)
    const response = await instance.get("/Course/GetCourseCommnets",{
        params: {CourseId : courseId},
    });
    return response.data;
}