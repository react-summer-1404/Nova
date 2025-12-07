import React from "react";

import { Tooltip } from "@heroui/react";
import { Button } from "@heroui/button";
import ModalSection from "../../../ui/Modal/ModalSection";
import { CiMenuKebab } from "react-icons/ci";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import { HiOutlineCreditCard, HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import useToggle from "../../../../hooks/useToggle";

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
const [isViewModalOpen, toggleViewModal] = useToggle(false);
const [mobileView, toggleMobileView] = useToggle(false);
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
                  {/* <CourseProductCard product={data} /> */}
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
                    onPress={() => mutationDelete.mutate(reservedId)}
                  >
                    حذف
                  </Button>
                </div>
              </div>
            }
          />
      
        <ModalSection
          StyleModal={"h-fit bg-transparent "}
          Icon={
            <IoEyeOutline className="text-dark-purple w-5 h-5 cursor-pointer" />
          }
          isOpen={isViewModalOpen}
          onClose={toggleViewModal}
          onOpen={toggleViewModal}
          // content={
          //   isLoading ? (
          //     <p>در حال بارگذاری...</p>
          //   ) : (
          //     <div className="w-full flex-center">
          //       {/* <CourseProductCard product={data} /> */}
          //     </div>
          //   )
          // }
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
