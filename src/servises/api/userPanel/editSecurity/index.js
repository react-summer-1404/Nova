import instance from "../../../../core/interceptor/interceptor";

export const putSecurityEdit = async (apiData) => {
  const response = await instance.put("/SharePanel/EditSecurity", apiData);
  return response.data;
};
