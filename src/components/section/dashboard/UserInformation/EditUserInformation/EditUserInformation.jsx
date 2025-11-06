import { Form, Formik } from "formik";
import React from "react";
// import editIcon from "../../../../../assets/icons/userEdit.svg"
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../../../servises/api/userPanel/getProfileInfo";
import Subject from "./Subject/Subject";
import { putEditProfile } from "../../../../../servises/api/userPanel/updateProfileInfo";

const EditUserInformation = () => {
  const {data:currentProf}=useQuery({
    queryKey:["currentProfileUser"],
    queryFn:getCurrentUserProfile
  })
  
  const mutation = useMutation({
    mutationFn:(formData)=>putEditProfile(formData),
    onError: (error) => {
      console.log("خطا رخ داد",error);
    },
    onSuccess: () => {
      console.log("ویرایش شد",);
    }
  })

  const submitHandling = async (values) => {
    try {
      const formData = new FormData();
      formData.append("FName", values.FName);
      formData.append("LName", values.LName);
      formData.append("NationalCode", values.NationalCode);
      formData.append("BirthDay", values.BirthDay);
      formData.append("TelegramLink", values.TelegramLink);
  
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.log("خطا در ارسال فرم:", error);
    }
  };
  
  return (
    <div className="flex flex-col w-full gap-5"  style={{ direction: "rtl" }}>
      <Subject/>
      <div className=" flex gap-4  ">
        <div className="flex w-1/2  justify-between">
          <Formik
          initialValues={{
            FName:currentProf?.fName || "",
            LName:currentProf?.lName || "",
            NationalCode:currentProf?.nationalCode || "",
            BirthDay:currentProf?.birthDay || "",
            TelegramLink:currentProf?.telegramLink || "",
          }}
          onSubmit={submitHandling}
          >
            <Form >
              <div className="flex gap-10  w-fit ">
                <div className="flex flex-col w-[200px] gap-5 ">
                  <FormGroup
                   type={"text"}
                   name={"FName"}
                   id={"FName"}
                   label={"نام"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>

                  <FormGroup
                   type={"number"}
                   name={"NationalCode"}
                   id={"NationalCode"}
                   label={"کد ملی"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>

                  <FormGroup
                   type={"text"}
                   name={"BirthDay"}
                   id={"BirthDay"}
                   label={"تاریخ تولد"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>

                  <FormGroup
                   type={"email"}
                   name={"gmail"}
                   id={"gmail"}
                   label={"ایمیل"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>
                  
                </div>
                <div className="flex flex-col w-[200px]  gap-5">
                <FormGroup
                   type={"text"}
                   name={"LName"}
                   id={"LName"}
                   label={"نام خانوادگی"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>

                  <FormGroup
                   type={"text"}
                   name={"gender"}
                   id={"gender"}
                   label={"جنسیت"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>

                  <FormGroup
                   type={"number"}
                   name={"phoneNumber"}
                   id={"phoneNumber"}
                   label={"شماره همراه"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>

                  <FormGroup
                   type={"text"}
                   name={"TelegramLink"}
                   id={"TelegramLink"}
                   label={"تلگرام"}
                   inputClass="h-[35px]"
                   labelClass="indent-2 -mb-2"/>
                </div>
              </div>
        <button type="submit" className="btn btn-primary">ذخیره</button>

            </Form>
          </Formik>
        </div>

        <div>prof</div>
      </div>
    </div>
  );
};

export default EditUserInformation;
