import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";
import { setToken } from "../../../hooks/localStorage";
import usePostLogin from "../hooks/usePostLogin";
import PasswordField from "../componenets/authForm/PasswordField";
import { useRequestState } from "../hooks/useRequestState";

const validationSchema = yup.object({
  phoneOrGmail: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("فیلد ایمیل نمی تواند خالی باشد"),
  password: yup
    .string()
    .min(4, "پسورد نمیتواند کمتر از 4 کاراکتر باشد")
    .max(15, "پسورد نمیتواند بیشتر از 15 کاراکتر باشد")
    .matches(/[a-z]+/, "حداقل شامل یک حرف کوچک باشد")
    .matches(/[A-Z]+/, "حداقل شامل یک حرف بزرگ باشد")
    .matches(/\d+/, "پسورد باید شامل عدد باشد")
    .required("فیلدر پسورد نمیتواد خالی باشد"),
  rememberMe: yup.boolean(),
});

const LoginForm = () => {
  const {
    mutateAsync: PostLoginData,
    isPending,
    isError,
    isSuccess,
  } = usePostLogin();

  const buttonText = useRequestState({
    isError,
    isPending,
    isSuccess,
    errorMessage: "درخواست موفقیت آمیز نبود",
    successMessage: "ورود با موفقیت صورت گرفت",
    defaultText: "ورود به حساب کاربری",
  });
  const handleSubmit = async (values) => {
    try {
      const data = await PostLoginData({
        phoneOrGmail: values.phoneOrGmail,
        password: values.password,
        rememberMe: Boolean(values.rememberMe),
      });
      const token = data.token;
      if (token) {
        setToken(token);
      }
    } catch (error) {
      console.error("login failed:", error);
      // console.log("error.response?.data:", error?.response?.data);
    }
  };

  return (
    <Formik
      className="w-full"
      initialValues={{
        phoneOrGmail: "",
        password: "",
        rememberMe: false,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className=" flex flex-col justify-end mt-7 sm:mt-8 gap-4">
        <div className="flex flex-col gap-3 sm:gap-8">
          <div className="relative flex flex-col gap-[.5rem]">
            <FormField
              type={"email"}
              name={"phoneOrGmail"}
              id={"phoneOrGmail"}
              label={"ایمیل"}
            />
            <ErrorMessage
              name="phoneOrGmail"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <div className="relative flex flex-col gap-[.5rem]">
            <PasswordField name="password" label={"پسورد"} />

            <ErrorMessage
              name="password"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between mt-2.5 sm:mt-6">
          <label htmlFor="rememberMe" className="flex flex-row-reverse">
            <Field type="checkbox" name="rememberMe" id="rememberMe" />
            <span
              style={{ color: "var(--color-black)" }}
              className="mr-2 font-semibold text-[16px] sm:text-[20px]"
            >
              مرا به خاطر بسپار
            </span>
          </label>
          <Link
            to={"/auth/forgetpassword"}
            style={{ color: "var( --color-text-gray)" }}
            className="text-[16px] sm:text-[20px] font-normal hover:underline cursor-pointer"
          >
            فراموشی رمز؟
          </Link>
        </div>

        <YellowButton type={"submit"} width={"100%"} text={buttonText} />
        <div className="my-3.5 sm:mt-6">
          <span
            style={{ color: "var(--color-black)" }}
            className="mr-2 font-semibold text-[16px] sm:text-[20px]"
          >
            حساب کاربری ندارید؟
          </span>
          <Link to={"/auth/signup"}>
            <span
              style={{ color: "var(--color-dark-purple)" }}
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
