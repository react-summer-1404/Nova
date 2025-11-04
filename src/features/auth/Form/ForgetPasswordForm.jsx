import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";
import useforgetPasswordEmail from "../hooks/useForgrtPaswordEmail";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("فیلد ایمیل نمی تواند خالی باشد"),
});

const ForgetPasswordForm = () => {
  const {
    mutateAsync: sendEmail,
    isError,
    isPending,
    error,
    data,
  } = useforgetPasswordEmail();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const data = await sendEmail({
        email: values.email,
      });
      if (data.success) {
        navigate("/auth/varifycode");
      }
    } catch (error) {
      console.error("there was an error:", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form style={{ direction: "rtl" }} className=" flex flex-col justify-end mt-7 sm:mt-8 gap-4">
        <div className="relative flex flex-col gap-[.5rem]">
          <FormField
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"ایمیل خود را وارد کنید"}
          />
          <ErrorMessage
            name="email"
            className="text-red-500 text-right text-[14px] pr-[1rem]"
            component={"span"}
          />
        </div>
        <YellowButton
          type={"submit"}
          width={"100%"}
          text={isPending ? "در حال ورود" : "ورود به حساب کاربری"}
        />
      </Form>
    </Formik>
  );
};

export default ForgetPasswordForm;
