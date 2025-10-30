import instance from "../../../../core/interceptor/interceptor"

export const postCommentCourse = async() => {
    const response = await instance.post("/Course/AddCommentCourse");
    return response.data;
}