import instance from "../../../core/interceptor/interceptor";

export const postMultiAccount = async (apiData) => {
  const response = await instance.post("/v2/multiAccount/addAccount",apiData);
  return response.data;
};
export const getMultiAccount = async () => {
  const response = await instance.get("/v2/multiAccount/myAccounts",);
  return response.data;
};

export const deleteMultiAccount = async (id) => {

  const response = await instance.patch(`/v2/multiAccount/removeAccount/${id}`);

  return response.data;
};
export const activeMultiAccount= async (id) => {

  const response = await instance.patch(`/v2/multiAccount/activeAccount//${id}`);

  return response.data;
};

