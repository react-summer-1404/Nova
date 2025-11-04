import instance from "./../../../core/interceptor/interceptor";

export const getBlogsDetail = async (id) => {
  const response = await instance.get(`/News/${id}`);
  return response.data;
};
