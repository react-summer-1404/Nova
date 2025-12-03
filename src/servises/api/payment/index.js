import instance from "../../../core/interceptor/interceptor";

export const payStep1 = async (reserveId) => {
  const response = await instance.patch(
    `/NewVersion/CoursePayment/StepOneToPay/${reserveId}`,
    { callbackUrl: "http://localhost:5173/dashboard/payMent/step2/" }
  );
  return response.data;
};
