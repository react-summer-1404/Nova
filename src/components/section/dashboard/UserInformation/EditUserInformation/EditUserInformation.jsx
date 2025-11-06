import { Field, Form, Formik } from "formik";
// import React, { useState } from "react";
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../../../servises/api/userPanel/getProfileInfo";
import Subject from "./Subject/Subject";
import { putEditProfile } from "../../../../../servises/api/userPanel/updateProfileInfo";
import { HiOutlineCamera } from "react-icons/hi2";
import profPic from "../../../../../assets/icons/ax-kartoni-bamazeh-11.svg";
import profPicccccccc from "../../../../../assets/images/prof.png";
import { postUserImage } from "../../../../../servises/api/userPanel/addProfileImage";
import ModalSection from "../../../../ui/Modal/ModalSection";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import useToggle from "../../../../../hooks/useToggle";

const EditUserInformation = () => {
  const [isModalOpen , toggleModal,setIsModalOpen] = useToggle(false);
  console.log(isModalOpen)
  const { data: currentProf } = useQuery({
    queryKey: ["currentProfUser"],
    queryFn: async () => await getCurrentUserProfile(),
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

  const mutationImage = useMutation({
    mutationFn: (formData) => postUserImage(formData),
    onError: (error) => {
      console.log("خطا رخ داد", error);
    },
    onSuccess: () => {
      console.log("اپلود شد");
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
      formData.append("Gender", values.Gender);
      formData.append("formFile",values.formFile);

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
            HomeAdderess: currentProf?.homeAdderess || "",
            LinkdinProfile: currentProf?.linkdinProfile || "",
            UserAbout: currentProf?.userAbout || "",
            Gender: currentProf?.gender || "",
          }}
          onSubmit={submitHandling}
          enableReinitialize
        >
          <Form className="flex  gap-5 justify-between w-full">
            <div className="flex flex-col border">
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
                    name={"Gender"}
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
            <div className=" flex flex-col border-1">
              <div className=" relative overflow-hidden  rounded-full w-[150px] h-[150px]">
                <img src={currentProf?.userPicture ||profPicccccccc }  alt="profile" />

                <ModalSection
                  StyleModal={
                    "h-[30px] w-full bg-[#0E0E0E66] absolute bottom-0 flex justify-center items-center cursor-pointer"
                  }
                  isOpen={isModalOpen}
                  onClose={toggleModal}
                  onOpen={toggleModal}
                  Icon={<HiOutlineCamera color="white" size={30} onClick={()=>toggleModal}/>}
                  size="4xl"
                  content={
                    <div className="border  border-red-500 flex flex-col justify-between items-center h-[400px]">
                      <div className="w-[200px] h-[200px] relative border ">
                        <img src={profPic} className="border w-full h-full" />
                        <button className="w-[50px] h-[50px] bg-dark-purple absolute -right-2 -bottom-2 rounded-full flex-center cursor-pointer" >
                          <FaCheck size={25} className="text-white" onClick={()=>setIsModalOpen(false)} />

                        </button>
                      </div>
                      <div className="w-full border border-amber-900">
                        <div className="flex gap-5 items-center">
                          <div className="flex gap-5">
                            <img
                              src={profPicccccccc}
                              className="border w-[100px] h-[100px]"
                            />
                            <img
                              src={profPicccccccc}
                              className="w-[100px] h-[100px]"
                            />
                            <img
                              src={profPicccccccc}
                              className="w-[100px] h-[100px]"
                            />
                          </div>
                          <div>
                            <label htmlFor="formFile">
                              <FaPlus size={30} cursor={"pointer"} className="text-dark-purple"/>
                            </label>
                            <Field
                              type="file"
                              id="formFile"
                              name="formFile"
                              accept="image/png, image/jpeg"
                              className="hidden"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>

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
