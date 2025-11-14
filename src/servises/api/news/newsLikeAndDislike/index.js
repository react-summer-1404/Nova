import instance from "../../../../core/interceptor/interceptor";

export const postNewsLike = async (newsId) => {
  const response = await instance.post(
    `/News/NewsLike/${newsId}`
  );
  return response.data;
};
export const postNewsDisLike = async (newsId) => {
  const response = await instance.post(
    `/News/NewsDissLike/${newsId}`
  );
  return response.data;
};
