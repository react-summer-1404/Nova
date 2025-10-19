import React from "react";
import { FormText } from "../componenets/authForm/Authform";
import SignUpForm from "../Form/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="p-6 sm:py-14 sm:px-18 flex flex-col justify-end">
      <div className=" text-right ">
        <FormText
          title={"ثبت نام"}
          subtitle={
           "جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید"
          }
        />
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
