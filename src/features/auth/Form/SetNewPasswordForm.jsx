import React from "react";
import * as yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";

const validationSchema = yup.object({
  newPassword: yup
    .string()
    .min(4, "پسورد نمیتواند کمتر از 4 کاراکتر باشد")
    .max(15, "پسورد نمیتواند بیشتر از 15 کاراکتر باشد")
    .matches(/["a-z"]+/, "حداقل شامل یک حرف کوچک باشد")
    .matches(/[A-Z]+/, "حداقل شامل یک حرف بزرگ باشد")
    .matches(/\d+/, "پسورد باید شامل عدد باشد")
    .required("فیلد نمیتواد خالی باشد"),
});

const SetNewPasswordForm = () => {
  return (
    <Formik
      initialValues={{
        newPassword: "",
      }}
       onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8">
        <div className="flex flex-col gap-0.5">
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField 
              type={"password"}
              name={"newPassword"}
              id={"newPassword"}
              placeHolder={"رمز عبور جدید را وارد کنید"}
            />
            <ErrorMessage
              name="newPassword"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <YellowButton
            type={"submit"}
            width={"100%"}
            text={"تکمیل فرایند"}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SetNewPasswordForm;
