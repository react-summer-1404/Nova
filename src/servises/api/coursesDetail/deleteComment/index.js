import instance from "../../../../core/interceptor/interceptor"

export const deleteCommentCourse = async(CourseCommandId) => {
    const response = await instance.delete(`/Course/DeleteCourseComment?CourseCommandId=${CourseCommandId}`);
    return response.data;
}