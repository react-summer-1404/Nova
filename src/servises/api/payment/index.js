import instance from "../../../core/interceptor/interceptor";

export const payStep1 = async ({ reservedId, courseId }) => {
  const response = await instance.patch(
    `/NewVersion/CoursePayment/StepOneToPay/${reservedId}`,
    {
      callbackUrl: `http://localhost:5173/dashboard/payMent/${courseId}?reservedId=${reservedId}`,
    }
  );
  console.log("courseId====>",courseId)

  return response.data;
};


export const payStep2 = async ({ reservedId, Authority }) => {
  const response = await instance.patch(
    `/NewVersion/CoursePayment/StepTwoToPay/${reservedId}`,
    { Authority }
  );
  return response.data;
};
