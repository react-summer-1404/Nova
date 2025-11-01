import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";
import YellowButton from "../../../components/ui/button/YellowButton";
import { useVerifyCode } from "../hooks/useVerifyCode";
import OtpField from "../componenets/authForm/OtpField";
import { useLocation } from "react-router-dom";

const validationSchema = yup.object({
  verifyCode: yup
    .string()
    .length(6, "حداقل 6 رقم")
    .required("کد تایید را به صورت صحیح وارد کنید"),
});

const ForgetPasswordForm = () => {
  const { mutateAsync: sendVerifyCode, isError, isPending } = useVerifyCode();
  const location = useLocation();
  const gmail = location.state?.gmail;

  const handleSubmit = async (values) => {
    if (!gmail) {
      console.error("ایمیل پیدا نشد!");
      return;
    }
    try {
      const code = await sendVerifyCode({
        gmail,
        verifyCode: values.verifyCode,
      });
      if (code.success) {
        console.log("آفرین درست کار کرد");
      }
    } catch (error) {
      console.log("there is an error");
    }
  };

  return (
    <Formik
      initialValues={{
        verifyCode: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8 ">
        <div className="flex-center flex-col gap-4">
          <OtpField name="verifyCode" />
          <ErrorMessage
            name="verifyCode"
            className="text-red-500 text-right text-[14px] pr-[1rem]"
            component={"span"}
          />
          <YellowButton
            type={"submit"}
            width={"100%"}
            text={"تایید کد یک بار مصرف"}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default ForgetPasswordForm;
