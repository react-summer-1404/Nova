import instance from '../../../../core/interceptor/interceptor'

export const PostCommentLike = async(CourseCommandId) => {
    const response = await instance.post("/Course/AddCourseCommentLike",{CourseCommandId});
    return response.data
}
