import React, { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("فیلد ایمیل نمی تواند خالی باشد"),
  password: yup
    .string()
    .min(4, "پسورد نمیتواند کمتر از 4 کاراکتر باشد")
    .max(15, "پسورد نمیتواند بیشتر از 15 کاراکتر باشد")
    .matches(/["a-z"]+/, "حداقل شامل یک حرف کوچک باشد")
    .matches(/[A-Z]+/, "حداقل شامل یک حرف بزرگ باشد")
    .matches(/\d+/, "پسورد باید شامل عدد باشد")
    .required("فیلدر پسورد نمیتواد خالی باشد"),
  rememberme: yup.boolean(),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      className="w-full"
      initialValues={{
        email: "",
        password: "",
        rememberme: undefined,
      }}
      onSubmit={(values) => {
        
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8">
        <div className="flex flex-col gap-3 sm:gap-8">
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField
              type={"email"}
              name={"email"}
              id={"email"}
              placeHolder={"ایمیل خود را وارد کنید"}
            />
            <ErrorMessage
              name="email"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField
              type={showPassword ? "text" : "password"}
              name={"password"}
              id={"password"}
              placeHolder={"رمز عبور خود را وارد کنید"}
            />

            <button
              className="absolute top-[37%] left-[7%]"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {" "}
              {showPassword ? (
                <IoEyeOutline style={{ color: "var(--color-light-blue)" }} />
              ) : (
                <IoEyeOffOutline style={{ color: "var(--color-light-blue)" }} />
              )}{" "}
            </button>

            <ErrorMessage
              name="password"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between mt-2.5 sm:mt-6">
          <label htmlFor="remeberme" className="flex flex-row-reverse">
            <Field type="checkbox" name="remeberme" id="remeberme" />
            <span
              style={{ color: "var(--color-black)" }}
              className="mr-2 font-semibold text-[16px] sm:text-[20px]"
            >
              مرا به خاطر بسپار
            </span>
          </label>
          <Link
            to={"/auth/forgetpassword"}
            style={{ color: "var(--color-dark-gray)" }}
            className="text-[16px] sm:text-[20px] font-normal hover:underline cursor-pointer"
          >
            فراموشی رمز؟
          </Link>
        </div>

        <YellowButton
          type={"submit"}
          width={"100%"}
          text={"ورود به حساب کاربری"}
        />
        <div className="my-3.5 sm:mt-6">
          <span
            style={{ color: "var(--color-black)" }}
            className="mr-2 font-semibold text-[16px] sm:text-[20px]"
          >
            حساب کاربری ندارید؟
          </span>
          <Link to={"/auth/signup"}>
            <span
              style={{ color: "var(--color-light-blue)" }}
              className="mr-2 font-semibold text-[16px] sm:text-[20px] underline cursor-pointer"
            >
              ثبت نام
            </span>
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
