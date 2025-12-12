import instance from "../../../core/interceptor/interceptor";

export const getNotification = async () => {
  const response = await instance.get("/v2/notification/alert/mineNoSeen");
  console.log("respone", response?.data);
  return response.data;
};

export const seenNotification = async (id) => {
  const response = await instance.patch(`/v2/notification/alert/see/${id}`);

  return response.data;
};
