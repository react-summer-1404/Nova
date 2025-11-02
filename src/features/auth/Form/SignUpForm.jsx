import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import YellowButton from "../../../components/ui/button/YellowButton";
import { usesendVerifyMessage } from "../hooks/usesendVerifyMessage";
import { useRequestState } from "../hooks/useRequestState";
import FormField from "../componenets/authForm/FormField";
import Stepper from "../componenets/authForm/Stepper";
import { Button } from "@heroui/react";

const validationSchema = yup.object({
  gmail: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("فیلد ایمیل نمی تواند خالی باشد"),
});

const SignUpForm = () => {
  const {
    mutateAsync: sendForm,
    isPending,
    isSuccess,
    isError,
  } = usesendVerifyMessage();
  const buttonText = useRequestState({
    isError,
    isSuccess,
    isPending,
    successMessage: "کد ارسال شد",
    errorMessage: "ارسال کد موفقیت آمیز نبود",
    defaultText: "دریافت کد",
  });

  // stepper
  const [setStep, setSetStep] = useState(1);

  const handlesubmit = async (values) => {
    try {
      const signUpForm = await sendForm({
        gmail: values.gmail,
      });
      console.log("ارسال ایمیل موفقیت آمیز بود", signUpForm);
    } catch (error) {
      console.log("error.response?.signUpForm:", error?.response?.signUpForm);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          gmail: "",
        }}
        onSubmit={handlesubmit}
        validationSchema={validationSchema}
      >
        <Form className=" flex flex-col justify-end mt-7 sm:mt-8">
          <div className="flex flex-col gap-3 sm:gap-8">
            <div className="relative flex flex-col gap-[.5rem]">
              <FormField type="email" label="ایمیل" name="gmail" />
              <ErrorMessage
                name="gmail"
                className="text-red-500 text-right text-[14px] pr-[1rem]"
                component={"span"}
              />
            </div>
           
          </div>
        </Form>
      </Formik>
      <Stepper currentStep = {setStep} buttonText={buttonText}/>
    </>
  );
};

export default SignUpForm;
