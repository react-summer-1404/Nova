import instance from "../../../../core/interceptor/interceptor"

export const getCommentReply = async (CourseId,CommentId) => {
    const response = await instance.get(`/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`);
    return response.data
}