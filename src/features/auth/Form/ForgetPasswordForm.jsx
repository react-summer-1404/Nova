import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("فیلد ایمیل نمی تواند خالی باشد"),
});

const ForgetPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(value) => {
        console.log(value);
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
