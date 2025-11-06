import instance from "../../../../core/interceptor/interceptor"

export const postCommentReply = async({CourseId,Title, Describe,CommentId}) => {
    const formData = new FormData();
    formData.append("CourseId", CourseId)
    formData.append("Title", Title)
    formData.append("Describe", Describe )
    formData.append("CommentId", CommentId )
    const response = await instance.post("/Course/AddCommentCourse", formData,{
        headers : {
            "Content-Type" : "multipart/from-data",
        },
    });
    return response.data;
}