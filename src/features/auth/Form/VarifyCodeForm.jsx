import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";

const validationSchema = yup.object({
  varifyCode: yup.string().required("کد تایید را وارد کنید"),
});




const ForgetPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        varifyCode: "",
      }}
      onSubmit={(value) => {
        console.log(value);
      }}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8">
        <div className="flex flex-col">
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField
              type={"text"}
              name={"varifyCode"}
              id={"varifyCode"}
              placeHolder={"کد را وارد کنید"}
            />
            <ErrorMessage
              name="varifyCode"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
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
