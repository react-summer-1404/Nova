import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";
import useforgetPasswordEmail from "../hooks/useForgrtPaswordEmail";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("فیلد ایمیل نمی تواند خالی باشد"),
});

const ForgetPasswordForm = () => {
  const { mutateAsync: PostEmail } = useforgetPasswordEmail();

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={async (values) => {
        try {
          const data = await PostEmail({
            email: values.email,
          });
          console.log("email sent successfully:", data);
        } catch (error) {
          console.error("there was an error:", error);
          console.log("error.response?.data:", error?.response?.data);
        }
      }}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8">
        <div className="relative flex flex-col gap-[.5rem]">
          <FormField
            type={"email"}
            name={"email"}
            id={"email"}
            placeHolder={"ایمیل خود را وارد کنید"}
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
          text={"ورود به حساب کاربری"}
        />
      </Form>
    </Formik>
  );
};

export default ForgetPasswordForm;
