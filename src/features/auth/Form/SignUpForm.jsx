import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";

const validationSchema = yup.object({
  phone: yup
    .string()
    .min(10, "حداقل 10رقم")
    .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست")
    .required("فیلد نمی تواند خالی باشد"),
});

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        phone: "",
      }}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8">
        <div className="flex flex-col gap-3 sm:gap-8">
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField
              type={"number"}
              name={"phone"}
              id={"phone"}
              placeHolder={"شماره مبایل خود را وارد کنید"}
            />
            <ErrorMessage
              name="phone"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <YellowButton
            type={"submit"}
            width={"100%"}
            text={"دریافت کد یکبار مصرف"}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
