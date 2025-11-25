import instance from "../../../../core/interceptor/interceptor";

export const postAddToFavoriteNews = async (NewsId) => {
  const response = await instance.post(`/News/AddFavoriteNews?NewsId=${NewsId}`);
  return response.data;
};
export const deleteAddToFavoriteNews = async (deleteEntityId) => {
  const response = await instance.delete("/News/DeleteFavoriteNews",{data:{deleteEntityId}});
  return response.data;
};
