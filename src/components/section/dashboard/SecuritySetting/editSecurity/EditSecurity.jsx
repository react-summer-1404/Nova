import React from "react";
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import { Formik, Form, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import { putSecurityEdit } from "../../../../../servises/api/userPanel/editSecurity";
import YellowButton from "../../../../ui/button/YellowButton";

function EditSecurity() {
    const securityMutation = useMutation({
        mutationFn:(data)=>putSecurityEdit(data),
        mutationKey:["editSecurity"],
        onSuccess:()=>console.log("درسته"),
        onError:(error)=>console.log("خطا رخ داد",error)
    })
  return (
    <div className="border flex flex-col gap-12">
      <Formik
      initialValues={{
        twoStepAuth: false,
        recoveryEmail: "",
      }}
      onSubmit={(values)=>{
        securityMutation.mutate(values)
      }}>
        <Form className="flex flex-col gap-8 ">
         <div className="flex flex-col gap-5 items-end ">
            <h2 className="text-base text-text-gray font-semibold">
              تایید دو مرحله ای
            </h2>
            <div className="flex-center gap-2 w-full">
              <div className="flex gap-2 ">
                <span className=" whitespace-nowrap mb-2">
                  مایل به تایید دو مرحله ای هستم
                </span>
                <FormGroup name={"twoStepAuth"} type={"checkbox"} />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-5">
            <h2 className="text-base font-semibold text-text-gray">ایمیل بازیابی</h2>
           <div className=" w-full">
           <FormGroup  name={"recoveryEmail"} inputClass="w-[300px] h-[38px]" />
           </div>
          </div>

          <div className="w-full flex-center">
          <YellowButton  text={"ارسال"} width={"160px"} height={"35px"}  type={"submit"}/>
          </div>

        </Form>
      </Formik>
    </div>
  );
}

export default EditSecurity;
