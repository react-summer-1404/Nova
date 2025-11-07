import React from "react";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IoSaveOutline } from "react-icons/io5";
import { postChangePassWord } from "../../../../../servises/api/userPanel/changePassword";
import PasswordField from "../../../../../features/auth/componenets/authForm/PasswordField";
import YellowButton from "../../../../ui/button/YellowButton";
import Subject from "../../UserInformation/EditUserInformation/Subject/Subject";


const validationSchema = yup.object({
  oldPassword: yup.string().required("*رمز عبور فعلی الزامی است"),
  newPassword: yup
    .string()
    .min(4, "پسورد نمیتواند کمتر از 4 کاراکتر باشد")
    .max(15, "پسورد نمیتواند بیشتر از 15 کاراکتر باشد")
    .matches(/["a-z"]+/, "حداقل شامل یک حرف کوچک باشد")
    .matches(/[A-Z]+/, "حداقل شامل یک حرف بزرگ باشد")
    .matches(/\d+/, "پسورد باید شامل عدد باشد")
    .required("*رمز عبور جدید الزامی است"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("newPassword"), null], "رمزها یکسان نیستند")
  //   .required("*تکرار رمز الزامی است"),
});

const ChangePassWord = () => {
  const PassMutation = useMutation({
    mutationFn: (data) => postChangePassWord(data),
    mutationKey: ["changePassWord"],
    onError: (error) => {console.log("خطا ", error)
    toast.error("خطا در تغییر رمز عبور")
},
    
    onSuccess: () => toast.success("رمز عبور تغییر کرد")
  });

  return (
    <div dir="rtl" className="flex flex-col gap-8">
      <Subject />


      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          // confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          PassMutation.mutate(values);
        }}
      >
          <Form >
         <div className="flex flex-col gap-12 ">
         <div className="flex flex-col items-start gap-5 ">
          <h2 className="text-bade text-text-gray">تغییر رمز</h2>
        <div className="flex flex-col flex-center gap-12">
        <div className="flex  gap-5 ">
              <div className="w-[300px] flex flex-col">
                <PasswordField name="oldPassword" label="رمز عبور فعلی" />
                <ErrorMessage
                  name="oldPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="w-[300px] flex flex-col">
                <PasswordField name="newPassword" label="رمز عبور جدید" />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* <div className="w-[300px] flex flex-col">
                <PasswordField name="confirmPassword" label="تکرار رمز جدید" />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div> */}
            </div>

            <YellowButton text={"ذخیره تغییرات"} width={"160px"} height={"35px"} icon={<IoSaveOutline size={18}/>} type={"submit"}/>
        </div>

         </div>
         </div>
          </Form>
      </Formik>
    </div>
  );
};

export default ChangePassWord;
