import instance from "../../../../core/interceptor/interceptor"

export const putCommentCourse = async() => {
    const response = await instance.post("/Course/AddCommentCourse");
    return response
}