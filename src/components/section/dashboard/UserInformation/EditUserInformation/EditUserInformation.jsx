import { Field, Form, Formik } from "formik";
import React from "react";
// import editIcon from "../../../../../assets/icons/userEdit.svg"
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../../../servises/api/userPanel/getProfileInfo";
import Subject from "./Subject/Subject";
import { putEditProfile } from "../../../../../servises/api/userPanel/updateProfileInfo";
import ImageContainer from "./ImageContainer/ImageContainer";
import { HiOutlineCamera } from "react-icons/hi2";
import profPic from "../../../../../assets/icons/ax-kartoni-bamazeh-11.svg";

const EditUserInformation = () => {
  const { data:currentProf } = useQuery({
    queryKey: ["currentProfUser"],
    queryFn:  getCurrentUserProfile,
  });
  console.log("currentProf ==>", currentProf);
  const mutation = useMutation({
    mutationFn: (formData) => putEditProfile(formData),
    onError: (error) => {
      console.log("خطا رخ داد", error);
    },
    onSuccess: () => {
      console.log("ویرایش شد");
    },
  });

  const submitHandling = async (values) => {
    try {
      const formData = new FormData();
      formData.append("FName", values.FName);
      formData.append("LName", values.LName);
      formData.append("NationalCode", values.NationalCode);
      formData.append("BirthDay", values.BirthDay);
      formData.append("TelegramLink", values.TelegramLink);
      formData.append("LinkdinProfile", values.LinkdinProfile);
      formData.append("UserAbout", values.UserAbout);
      formData.append("HomeAdderess", values.HomeAdderess);
      formData.append("NationalCode", values.NationalCode);
      formData.append("Gender", values.Gender);
      // formData.append("Latitude", values.Latitude);
      // formData.append("Longitude", values.Longitude);

      await mutation.mutateAsync(formData);
    } catch (error) {
      console.log("خطا در ارسال فرم:", error);
    }
  };
  return (
    <div className="flex flex-col w-full gap-5" style={{ direction: "rtl" }}>
      <Subject />
      <div className="flex w-full  border justify-between ">
        <Formik
          initialValues={{
            FName: currentProf?.fName || "",
            LName: currentProf?.lName || "",
            NationalCode: currentProf?.nationalCode || "",
            BirthDay: currentProf?.birthDay || "",
            TelegramLink: currentProf?.telegramLink || "",
            BirthDay: currentProf?.birthDay || "",
            LinkdinProfile: currentProf?.linkdinProfile || "",
            UserAbout: currentProf?.userAbout || "",
            Gender: currentProf?.gender || "",
          }}
          onSubmit={submitHandling}
        >
          <Form className="flex  gap-5 ">
            <div className="flex flex-col">
              <div className="flex gap-10  w-fit ">
                <div className="flex flex-col w-[200px] gap-5 ">
                  <FormGroup
                    type={"text"}
                    name={"FName"}
                    id={"FName"}
                    label={"نام"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    type={"number"}
                    name={"NationalCode"}
                    id={"NationalCode"}
                    label={"کد ملی"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    type={"text"}
                    name={"BirthDay"}
                    id={"BirthDay"}
                    label={"تاریخ تولد"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    type={"email"}
                    name={"gmail"}
                    id={"gmail"}
                    label={"ایمیل"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />
                </div>
                <div className="flex flex-col w-[200px]  gap-5">
                  <FormGroup
                    type={"text"}
                    name={"LName"}
                    id={"LName"}
                    label={"نام خانوادگی"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />
               
                  <FormGroup
                    name={"gender"}
                    label={"جنسیت"}
                    as={"select"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  >
                    <option value="true">مرد</option>
                    <option value="false">زن</option>
                  </FormGroup>

                  <FormGroup
                    type={"number"}
                    name={"phoneNumber"}
                    id={"phoneNumber"}
                    label={"شماره همراه"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    type={"text"}
                    name={"TelegramLink"}
                    id={"TelegramLink"}
                    label={"تلگرام"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <FormGroup
                  type={"text"}
                  name={"LinkdinProfile"}
                  id={"LinkdinProfile"}
                  label={"لینکدین"}
                  inputClass="h-[35px]"
                  labelClass="indent-2 -mb-2"
                />

                <FormGroup
                  type={"text"}
                  name={"HomeAdderess"}
                  id={"HomeAdderess"}
                  label={"ادرس"}
                  inputClass="h-[35px]"
                  labelClass="indent-2 -mb-2"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                ذخیره
              </button>
            </div>
            <div className=" flex  flex-col">
              <ImageContainer
                Icon={<HiOutlineCamera size={30} className="text-white" />}
                profPic={profPic}
              />
              <FormGroup
                name={"UserAbout"}
                id={"UserAbout"}
                label={"درباره ما"}
                inputClass="h-[135px]"
                labelClass="indent-2 -mb-2"
              ></FormGroup>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditUserInformation;
