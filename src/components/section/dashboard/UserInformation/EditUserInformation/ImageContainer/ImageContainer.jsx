import React, { useState } from "react";
// import UserProfModal from '../UserProfModal/UserProfModal'
import ModalSection from "../../../../../ui/Modal/ModalSection";
import { Field } from "formik";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { HiOutlineCamera } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import useToggle from "../../../../../../hooks/useToggle";
import toast from "react-hot-toast";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { postUserImage } from "../../../../../../servises/api/userPanel/addProfileImage";
import { postUserImageSelect } from "../../../../../../servises/api/userPanel/selectProfileImage";
import { deleteUserImageSelect } from "../../../../../../servises/api/userPanel/deleteProfileImage";

const ImageContainer = ({ currentProf }) => {
  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const queryClient = useQueryClient();

  const mutationImage = useMutation({
    mutationFn: (formData) => postUserImage(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["currentProfUser"])
    },
  });

  const mutationImageSelect = useMutation({
    mutationFn: (formData) => postUserImageSelect(formData),
    onError: () => toast.error("خطا در انتخاب عکس"),
    onSuccess: () => {
      toast.success("پروفایل شما انتخاب شد");
      setIsModalOpen(false);
      queryClient.invalidateQueries(["currentProfUser"])

    },
  });

  const deleteMutation = useMutation({
    mutationFn: (formData) => deleteUserImageSelect(formData),
    onError: (error) =>{ toast.error("خطا در حذف عکس")
    console.log("error", error)
  },
    onSuccess: () => {
      toast.success("پروفایل شما حذف شد");
      queryClient.invalidateQueries(["currentProfUser"])

    },
  });

  const currentImage = currentProf?.userImage;
// console.log(currentProf?.currentPictureAddres)
  return (
    <div className=" relative overflow-hidden  rounded-full w-[150px] h-[150px]">
<img src={selectedImg?.puctureAddress || currentProf?.currentPictureAddres} alt="profile" />

      <ModalSection
        StyleModal={
          "h-[30px] w-full bg-[#0E0E0E66] absolute bottom-0 flex justify-center items-center cursor-pointer"
        }
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpen={toggleModal}
        Icon={
          <HiOutlineCamera
            color="white"
            size={30}
            onClick={() => toggleModal}
          />
        }
        size="4xl"
        content={
          <div className="flex flex-col justify-between items-center h-[400px] px-8">
            <div className="w-[200px] h-[200px] relative  rounded-5">
              <img
                src={selectedImg?.puctureAddress}
                className="w-full h-full  rounded-2xl"
              />
              <button
                className="w-[50px] h-[50px] bg-dark-purple absolute -right-2 -bottom-2 rounded-full flex-center cursor-pointer"
                onClick={() => {
                  const formData = new FormData();
                  formData.append("ImageId", selectedImg.id);
                  mutationImageSelect.mutate(formData);
                }}
              >
                <FaCheck size={25} className="text-white" />
              </button>
            </div>
            <div className="w-full">
              <div className="flex gap-5 items-center ">
                {currentImage?.map((img, index) => (
                  <div className=" relative" key={img.id}>
                    <img
                      src={img.puctureAddress}
                      alt={`image ${index}`}
                        className={`w-[100px] h-[100px] object-cover rounded cursor-pointer transition ${
                        selectedImg?.id === img.id ? "ring-4 ring-dark-purple" : ""
                      }`}
                      onClick={() => {
                        setSelectedImg(img);
                      }}
                    />
                    <button className=" absolute -top-3 -left-3 w-[25px] h-[25px] flex-center rounded-full bg-dark-purple"
                    onClick={()=>{
                      const formData = new FormData();
                      formData.append("DeleteEntityId", img.id);
                      deleteMutation.mutate(formData);
                    }}>
                      <IoClose color="white" />
                    </button>
                  </div>
                ))}
                <div className="flex gap-5"></div>
                <div>
                  <label htmlFor="formFile">
                    <FaPlus
                      size={30}
                      cursor={"pointer"}
                      className="text-dark-purple"
                    />
                  </label>
                  <Field
                    type="file"
                    id="formFile"
                    name="formFile"
                    accept="image/png, image/jpeg"
                    className="hidden"
                    onChange={async(event) => {
                      const sendFile = event.currentTarget.files[0];
                      if (sendFile) {
                        const formData = new FormData();
                        formData.append("formFile", sendFile);
                        mutationImage.mutate(formData);
                        await toast.promise(
                          mutationImage.mutateAsync(formData),
                          {
                            loading: "در حال آپلود عکس...",
                            success: "پروفایل شما اضافه شد ",
                            error: "خطا در آپلود عکس ",
                          }
                        );
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ImageContainer;
