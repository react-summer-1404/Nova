import instance from "../../../core/interceptor/interceptor";

export const payStep1 = async (reserveId,courseId) => {

  const response = await instance.patch(
    `/NewVersion/CoursePayment/StepOneToPay/${reserveId}`,
    { callbackUrl: `http://localhost:5173/dashboard/payMent/${courseId}` }
  );
  return response.data;
};
export const payStep2 = async (reserveId,Authority) => {
  const response = await instance.patch(
    `/NewVersion/CoursePayment/StepTwoToPay/${reserveId}`,
    { Authority }
  );
  return response.data;
};
