import instance from "../../../../core/interceptor/interceptor";
export const getCourseDetailComment = async (newsId) => {
    const response = await instance.get(`/News/GetRepliesComments?Id=${newsId}`);
    return response.data;
}

export const getCommentReply = async (CourseId,CommentId) => {
    const response = await instance.get(`/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`);
    return response.data
}