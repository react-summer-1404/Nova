import React from "react";
import { FormText } from "../componenets/authForm/Authform";
import LoginForm from "../Form/LoginForm";

const LoginPage = () => {
  return (
    <div className="p-6 sm:py-14 sm:px-18 flex flex-col justify-end">
      <div className=" text-right ">
        <FormText
          title={"خوش اومدید!"}
          subtitle={
            "برای ورود به حساب خود ایمیل یا شماره موبایل و رمز عبور خود را وارد کنید"
          }
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
