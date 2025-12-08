import React, { useState } from "react";

import { Spinner, Tooltip } from "@heroui/react";
import { Button } from "@heroui/button";
import ModalSection from "../../../ui/Modal/ModalSection";
import { CiMenuKebab } from "react-icons/ci";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import { HiOutlineCreditCard, HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import useToggle from "../../../../hooks/useToggle";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addHomeWork,
  addHomeWorkStep2,
  deleteHomeWork,
} from "../../../../servises/api/userPanel/homeWork";
import toast from "react-hot-toast";
import { Field } from "formik";

const HomeWorkInfo = ({
  courseStudentId,
  lastUpdate,
  hwDescribe,
  hwTitle,
  homeWorkId,
  groupName,
}) => {
  const [isDeleteModalOpen, toggleDeleteModal, setIsDeleteModalOpen] =
    useToggle(false);
  const [exercise, setExercise] = useState(false);
  const [mobileView, toggleMobileView] = useToggle(false);
  const [sendHw, toggleHw, setSendHw] = useToggle(false);
  const [sendFile, setSendFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileType, setFileType] = useState(null);

  const step1AddHw = useMutation({
    mutationFn: (apiData) => addHomeWork(apiData),
    onSuccess: (data) => {
      toast.success(data?.message);

      setExercise(data?.id);
    },
    onError: (error) => {
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
  });
  const step2AddHw = useMutation({
    mutationFn: (formData) => addHomeWorkStep2(formData),
  });
  const deleteMutation = useMutation({
    mutationFn: (apiData) => deleteHomeWork(apiData),
    onSuccess: (data) => {
      toast.success(data?.message);

      setExercise(data?.id);
    },
    onError: (error) => {
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
  });
  return (
    <div className="justify-center items-center flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]">
      <div className="md:hidden">
        <ModalSection
          StyleModal={"bg-transparent"}
          Icon={<CiMenuKebab />}
          isOpen={mobileView}
          onClose={toggleMobileView}
          onOpen={toggleMobileView}
          content={
            <div className="flex flex-col gap-3">
              <div className="flex-col-center gap-5">
                <p className="text-navy">ایا از حذف این دوره اطمینن دارید؟</p>
                <div className="w-full flex-center">
                </div>
                <div className="flex w-full justify-evenly">
                  <Button
                    className="w-[70px] h-[35px] bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition-all duration-200"
                    onPress={() => setIsDeleteModalOpen(false)}
                  >
                    لغو
                  </Button>

                  <Button
                    className="w-[70px] h-[35px] bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-200 shadow-sm"
                    onPress={() => mutationDelete.mutate(reservedId)}
                  >
                    حذف
                  </Button>
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div className="md:flex w-[100px] gap-2 hidden">
        <ModalSection
          StyleModal={"h-fit bg-transparent "}
          Icon={
            <HiOutlineTrash className="text-dark-purple w-5 h-5 cursor-pointer" />
          }
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          onOpen={toggleDeleteModal}
          content={
            <div className="flex-col-center gap-5">
              <p className="text-navy">ایا از حذف این دوره اطمینن دارید؟</p>
              <div className="flex w-full justify-evenly">
                <Button
                  className="w-[70px] h-[35px] bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition-all duration-200"
                  onPress={() => setIsDeleteModalOpen(false)}
                >
                  لغو
                </Button>

                <Button
                  className="w-[70px] h-[35px] bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-200 shadow-sm"
                  onPress={() => deleteMutation.mutate({exerciseFileId:homeWorkId})}
                >
                  حذف
                </Button>
              </div>
            </div>
          }
        />

        <ModalSection
          Icon={
            <div
              onClick={() =>
                step1AddHw.mutate({
                  hwid: homeWorkId,
                  cstudentId: courseStudentId,
                })
              }
            >
              <AiOutlineSend
                size={20}
                className="text-dark-purple w-5 h-5 cursor-pointer"
              />
            </div>
          }
          StyleModal={"h-fit bg-transparent "}
          isOpen={sendHw}
          onClose={toggleHw}
          onOpen={toggleHw}
          content={
            <div className="flex flex-col gap-3">
              <div className="flex-col-center gap-5">
                <div>
                  <label htmlFor="ExersiceFiles">
                    <FaPlus
                      size={30}
                      cursor={"pointer"}
                      className="text-dark-purple"
                    />
                  </label>

                  <input
                    type="file"
                    id="ExersiceFiles"
                    name="ExersiceFiles"
                    accept=".pdf, image/*"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setSendFile(file);

                      if (file) {
                        const type = file.type;
                        setFileType(type);

                        if (type.startsWith("image/")) {
                          setPreview(URL.createObjectURL(file));
                        } else if (type === "application/pdf") {
                          setPreview(file.name); 
                        }
                      }
                    }}
                  />

                  {preview && fileType?.startsWith("image/") && (
                    <img
                      src={preview}
                      alt="preview"
                      className="w-32 h-32 mt-3 rounded-lg object-cover "
                    />
                  )}

                  {preview && fileType === "application/pdf" && (
                    <div className="mt-3 p-2  rounded bg-gray-100 text-sm">
                      📄 {preview}
                    </div>
                  )}
                </div>

                <div className="flex w-full justify-evenly">
                  <Button
                    className="w-[70px] h-[35px] bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition-all duration-200"
                    onPress={() => toggleHw()}
                  >
                    لغو
                  </Button>

                  <Button
                    color="success"
                    className="w-[70px] h-[35px] text-white font-medium rounded-md transition-all duration-200 shadow-sm"
                    onPress={async () => {
                      if (!sendFile) {
                        toast.error("لطفا فایل را انتخاب کنید");
                        return;
                      }

                      const formData = new FormData();
                      formData.append("ExersiceFiles", sendFile);
                      formData.append("CouresUserHomeWorkId", exercise);

                      await toast.promise(step2AddHw.mutateAsync(formData), {
                        loading: "در حال آپلود فایل...",
                        success: "ارسال شد",
                        error: "خطا در آپلود فایل",
                      });
                    }}
                  >
                    ارسال
                  </Button>
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div className="w-[67%] grid grid-flow-col auto-cols-fr ">
        <div>{lastUpdate}</div>

        <div className="truncate w-4/5">
          <p className="text-right">{hwDescribe}</p>
        </div>

        <div>{hwTitle}</div>
        <div>{groupName}</div>
      </div>

      <div className="lg:w-[4%] rounded-full h-[35px]"></div>
    </div>
  );
};

export default HomeWorkInfo;
