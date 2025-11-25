import instance from "../../../../core/interceptor/interceptor";

export const postNewsCommentLike = async (CommentId) => {
  const response = await instance.post(
    `/News/CommentLike/${CommentId}?LikeType=true`
  );
  return response.data;
};

