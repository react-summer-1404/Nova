import React from "react";
import { FormText } from "../componenets/authForm/Authform";
import SetNewPasswordForm from "../Form/SetNewPasswordForm";

const SetNewPasswordPage = () => {
  return (
    <div className="p-6 sm:py-14 sm:px-18 flex flex-col justify-end">
      <div className=" text-right ">
        <FormText
          title={"رمز عبور جدید"}
          subtitle={
            "رمز عبور جدید خود را وارد کنید"
          }
        />
      </div>
      <SetNewPasswordForm />
    </div>
  );
};

export default SetNewPasswordPage;
