import React from "react";
// import UserProfModal from '../UserProfModal/UserProfModal'
import ModalSection from "../../../../../ui/Modal/ModalSection";
import { Field } from "formik";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import profPic from "../../../../../../assets/icons/ax-kartoni-bamazeh-11.svg";
import profPicccccccc from "../../../../../../assets/images/prof.png";
import { HiOutlineCamera } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import useToggle from "../../../../../../hooks/useToggle";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { postUserImage } from "../../../../../../servises/api/userPanel/addProfileImage";
import { postUserImageSelect } from "../../../../../../servises/api/userPanel/selectProfileImage";

const ImageContainer = ({ currentProf }) => {
  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);

  const mutationImage = useMutation({
    mutationFn: (formData) => postUserImage(formData),
    onError: (error) => {
      console.log("خطا رخ داد", error);
    },
    onSuccess: () => {
      toast.success("پروفایل شما اضافه شد");
    },
  });
  const mutationImageSelect = useMutation({
    mutationFn: (formData) => postUserImageSelect(formData),
    onError: (error) => {
      console.log("خطا رخ داد", error);
    },
    onSuccess: () => {
      toast.success("پروفایل شما انتخاب شد");
    },
  });

  const currentImage = currentProf?.userImage;

  // console.log("currentImage",currentImage?.puctureAddress)
  return (
    <div className=" relative overflow-hidden  rounded-full w-[150px] h-[150px]">
      <img src={currentProf?.userPicture || profPicccccccc} alt="profile" />

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
            <div className="w-[200px] h-[200px] relative">
              <img src={profPic} className="w-full h-full" />
              <button
                className="w-[50px] h-[50px] bg-dark-purple absolute -right-2 -bottom-2 rounded-full flex-center cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <FaCheck size={25} className="text-white" />
              </button>
            </div>
            <div className="w-full">
              <div className="flex gap-5 items-center ">
                {currentImage?.map((img, index) => (
                <div className="border relative">
                    <img
                    key={img.id}
                    src={img.puctureAddress}
                    alt={`image ${index}`}
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                  <button className=" absolute -top-3 -left-3 w-[25px] h-[25px] flex-center rounded-full bg-dark-purple"><IoClose color="white"/></button>
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
                    onChange={(event) => {
                      const sendFile = event.currentTarget.files[0];
                      if (sendFile) {
                        const formData = new FormData();
                        formData.append("formFile", sendFile);
                        mutationImage.mutate(formData);
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
