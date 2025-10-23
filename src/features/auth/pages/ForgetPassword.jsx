import React from "react";
import { FormText } from "../componenets/authForm/Authform";
import ForgetPasswordForm from "../Form/ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div className="p-6 sm:py-14 sm:px-18 flex flex-col justify-end">
      <div className=" text-right ">
        <FormText
          title={"تغییر رمزعبور"}
          subtitle={"جهت دریافت کد یک بار مصرف شماره تماس خود را وارد کنید"}
        />
      </div>
      <ForgetPasswordForm />
      <ul className="steps">
        <li className="step step-primary">شماره تماس</li>
        <li className="step">دریافت کد</li>
        <li className="step">تغییر رمز عبور</li>
      </ul>
    </div>
  );
};

export default ForgetPassword;
