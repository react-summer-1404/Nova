import instance from '../../../../core/interceptor/interceptor'

export const PostCommentLike = async(CourseCommandId) => {
    const response = await instance.post(`/Course/AddCourseCommentLike?CourseCommandId=${CourseCommandId}`);
    return response.data
}
export const deleteCommentLike = async (id) => {
  const response = await instance.delete(`/Course/DeleteCourseCommentLike`, {
    params: { CourseCommandId: id },
  });
  return response.data;
};



