import instance from '../../../../core/interceptor/interceptor'

export const PostCommentDisLike = async(CourseCommandId) => {
    const response = await instance.post(`Course/AddCourseCommentDissLike?CourseCommandId=${CourseCommandId}`);
    return response.data
}
