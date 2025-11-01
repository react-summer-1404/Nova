import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import FormField from "../componenets/authForm/FormField";
import PasswordField from "../componenets/authForm/PasswordField";
import YellowButton from "../../../components/ui/button/YellowButton";
import { useSignUpComplete } from "../hooks/usesignUpComplete";
import { useRequestState } from "../hooks/useRequestState";
import { setToken } from "../../../hooks/localStorage";

const validationSchema = yup.object({
  gmail: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("فیلد ایمیل نمی تواند خالی باشد"),
  password: yup
    .string()
    .min(4, "پسورد نمیتواند کمتر از 4 کاراکتر باشد")
    .max(15, "پسورد نمیتواند بیشتر از 15 کاراکتر باشد")
    .matches(/[a-z]+/, "حداقل شامل یک حرف کوچک باشد")
    .matches(/[A-Z]+/, "حداقل شامل یک حرف بزرگ باشد")
    .matches(/\d+/, "پسورد باید شامل عدد باشد")
    .required("فیلدر پسورد نمیتواد خالی باشد"),
  phoneNumber: yup
    .string()
    .required("فیلد شماره تلفن نمیتواند خالی باشد")
    .matches(/^(?:\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست"),
});

const SignUpCompleteForm = () => {
  const {
    mutateAsync: sendForm,
    isError,
    isPending,
    isSuccess,
  } = useSignUpComplete();
  const buttonText = useRequestState({
    isError,
    isSuccess,
    isPending,
    errorMessage: "ارسال فایل موفقیت آمیز نبود",
    successMessage: "ثبت شد",
    defaultText: "تکمیل فرایند ثبتنام",
  });
  const handleSubmit = async (values) => {
    try {
      const sendCompleteSignUpForm = await sendForm({
        gmail: values.gmail,
        password: values.password,
        phoneNumber: values.phoneNumber,
      });
      const token = sendCompleteSignUpForm.token
      if(token){
        setToken(token)
      }
    } catch {}
  };

  return (
    <Formik
      initialValues={{
        password: "",
        gmail: "",
        phoneNumber: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8">
        <div className="flex flex-col gap-3 sm:gap-8">
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField type={"email"} label={"ایمیل"} name={"gmail"} />
            <ErrorMessage
              name="gmail"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <div className="relative flex flex-col gap-[.5rem]">
            <PasswordField name={"password"} />
            <ErrorMessage
              name="password"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField
              type={"phoneNumber"}
              label={"شماره تلفن"}
              name={"phoneNumber"}
            />
            <ErrorMessage
              name="phoneNumber"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <YellowButton type={"submit"} width={"100%"} text={buttonText} />
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpCompleteForm;
