import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FormField } from "../componenets/authForm/Authform";
import YellowButton from "../../../components/ui/button/YellowButton";
import { setToken } from "../../../hooks/localStorage";
import usePostLogin from "../hooks/usePostLogin";
import PasswordField from "../componenets/authForm/PasswordField";
import { useRequestState } from "../hooks/useRequestState";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../servises/api/userPanel/getProfileInfo";

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
  const{data} = useQuery({
    queryKey:"roles",
    queryFn:getCurrentUserProfile
  })
  const navigate= useNavigate()
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

  let userToken = null;
  try {
    const storedUserData = localStorage.getItem("storedUserData");
    if (storedUserData) userToken = JSON.parse(storedUserData);
  } catch (error) {
    userToken = null;
  }

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
        setRole(data.roles);
        navigate('/dashboard')
        if (values.rememberMe) {
          try {
            localStorage.setItem(
              "storedUserData",
              JSON.stringify({ phoneOrGmail: values.phoneOrGmail })
            );
          } catch (error) {}
        } else {
          try {
            localStorage.removeItem("savedCredentials");
          } catch (e) {}
        }
      }
    } catch (error) {
      console.error("login failed:", error);
    }
  };

  return (
    <Formik
      className="w-full"
      initialValues={{
        phoneOrGmail: userToken?.phoneOrGmail || "",
        password: "",
        rememberMe: !!userToken?.phoneOrGmail,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form
        style={{ direction: "rtl" }}
        className="flex h-full flex-col justify-end mt-7 sm:mt-8 gap-6"
      >
        <div className="flex flex-col gap-1 sm:gap-4">
          <div className="relative flex flex-col gap-[.4rem]">
            <FormField
              type={"email"}
              name={"phoneOrGmail"}
              id={"phoneOrGmail"}
              label={"ایمیل"}
              placeholder={"ایمیل خود را وارد کنید"}
            />
            <ErrorMessage
              name="phoneOrGmail"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
          <div className="flex flex-col gap-[.4rem]">
            <PasswordField
              name="password"
              label={"پسورد"}
              placeholder={"پسورد خود را وارد کنید"}
            />

            <ErrorMessage
              name="password"
              className="text-red-500 text-right text-[14px] pr-[1rem]"
              component={"span"}
            />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between mt-4">
          <Link
            to={"/auth/forgetpassword"}
            style={{ color: "var( --color-text-gray)" }}
            className="text-[16px] sm:text-[20px] font-normal hover:underline cursor-pointer"
          >
            فراموشی رمز؟
          </Link>
          <label htmlFor="rememberMe" className="flex flex-row-reverse">
            <span
              style={{ color: "var(--color-black)" }}
              className="mr-2 font-semibold text-[16px] sm:text-[20px]"
            >
              مرا به خاطر بسپار
            </span>
            <Field type="checkbox" name="rememberMe" id="rememberMe" />
          </label>
        </div>

        <YellowButton type={"submit"} width={"100%"} text={buttonText} />
        <div>
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
