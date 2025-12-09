import instance from "../../../../core/interceptor/interceptor";

export const postNewsCommentLike = async (CommentId) => {
  const response = await instance.post(
    `/News/CommentLike/${CommentId}?LikeType=true`
  );
  return response.data;
};
export const deleteNewsCommentLike = async (deleteEntityId) => {
  const response = await instance.delete(
    `/News/DeleteCommentLikeNews`,{
      data: { deleteEntityId }
    }
  );
  return response.data;
};

