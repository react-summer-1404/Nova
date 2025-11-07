import instance from "../../../../core/interceptor/interceptor";

export const putSecurityEdit = async (apiData) => {
  const response = await instance.put("/SharePanel/EditSecurity", {
    twoStepAuth: apiData.twoStepAuth,
    recoveryEmail: apiData.recoveryEmail,
    baseUrl: "http://localhost:5173/dashboard/securitysetting",
  });
  return response.data;
};