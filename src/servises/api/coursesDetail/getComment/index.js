import instance from "../../../../core/interceptor/interceptor";
export const getCourseDetailComment = async (CourseId) => {
    console.log("CourseCommnets", CourseId)
    const response = await instance.get(`/Course/GetCourseCommnets/${CourseId}`);
    return response.data;
}