import instance from "../../../../core/interceptor/interceptor"

export const postCommentCourse = async({CourseId,Title, Describe}) => {
    const formData = new FormData();
    formData.append("CourseId", CourseId)
    formData.append("Title", Title)
    formData.append("Describe", Describe )
    const response = await instance.post("/Course/AddCommentCourse", formData,{
        headers : {
            "Content-Type" : "multipart/from-data",
        },
    });
    return response.data;
}