import React from "react";
import { FormText} from "../componenets/authForm/Authform";
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
    </div>
  );
};

export default ForgetPassword;
