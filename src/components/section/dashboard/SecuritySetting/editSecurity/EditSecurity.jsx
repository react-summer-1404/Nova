import React from "react";
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import { Formik, Form, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import { putSecurityEdit } from "../../../../../servises/api/userPanel/editSecurity";
import YellowButton from "../../../../ui/button/YellowButton";
import toast from "react-hot-toast";
import * as Yup from "yup";

function EditSecurity() {
  const securityMutation = useMutation({
    mutationFn: (data) => putSecurityEdit(data),
    mutationKey: ["editSecurity"],
    onSuccess: () => {
      toast.success("عملیات موفقیت آمیز بود");
    },
    onError: (error) => {
      console.log("error", error);
      const msg = error?.response?.data?.message;
      const link = error?.response?.data?.link;
      if (link) {
        toast.error(
          <div>
            {msg} <br />
            <a href={link} target="_blank" style={{ color: "blue" }}>
              رفتن به ربات
            </a>
          </div>,
          { removeDelay: 700 }
        );
      } else {
        toast.error(msg);
      }
    },
  });

  const validationSchema = Yup.object({
    recoveryEmail: Yup.string()
      .email("فرمت ایمیل صحیح نیست")
      .required("ایمیل  الزامی است"),
    telegramUsername: Yup.string()
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "نام کاربری تلگرام فقط می‌تواند شامل حروف، اعداد و _ باشد"
      )
      .required("آیدی تلگرام الزامی است"),
  });

  return (
    <div className="flex flex-col gap-12">
      <Formik
        initialValues={{
          twoStepAuth: false,
          recoveryEmail: "",
          telegramUsername: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          securityMutation.mutate(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 items-end">
              <h2 className="text-base text-text-gray font-semibold">
                تایید دو مرحله ای
              </h2>
              <div className="flex-center gap-2 w-full">
                <div className="flex gap-2">
                  <span className="whitespace-nowrap mb-2">
                    مایل به تایید دو مرحله ای هستم
                  </span>
                  <FormGroup name={"twoStepAuth"} type={"checkbox"} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-5">
              <h2 className="text-base font-semibold text-text-gray">
                ایمیل بازیابی
              </h2>
              <div className="flex-center  w-full flex-col ">
                <FormGroup
                  name={"recoveryEmail"}
                  inputClass="w-[300px] h-[38px]"
                  errorClass="text-sm mt-1"
                />
              
              </div>
            </div>

            <div className="flex flex-col items-end gap-5">
              <h2 className="text-base font-semibold text-text-gray">
                آیدی تلگرام
              </h2>
              <div className="flex-center  w-full flex-col ">
                <FormGroup
                  name={"telegramUsername"}
                  inputClass="w-[300px] h-[38px]"
                  errorClass="text-sm mt-1"
                />
                
              </div>
            </div>

            <div className="w-full flex-center">
              <YellowButton
                text={"ارسال"}
                width={"160px"}
                height={"35px"}
                type={"submit"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditSecurity;
