import instance from "../../../../core/interceptor/interceptor"

export const getReplies = async (CourseId,CommentId) => {
    const response = await instance.get(`/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`);
    return response.data
}