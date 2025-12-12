import React from "react";
import { HiOutlineCreditCard, HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import ModalSection from "../../../../ui/Modal/ModalSection";
import useToggle from "../../../../../hooks/useToggle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CourseProductCard from "../../../../ui/card/CourseProductCard";
import { getCourseDetail } from "../../../../../servises/api/coursesDetail/getDetail";
import { Button } from "@heroui/button";
import { deleteReserveCourse } from "../../../../../servises/api/courses/ReserveCourse";
import toast from "react-hot-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { payStep1 } from "../../../../../servises/api/payment";
const NotifTable = ({notifData}) => {
  return (
    <div className=" justify-center items-center gap-2 flex w-full  h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] ">
      <div className="md:flex w-[100px] gap-2 ">
        <ModalSection
          StyleModal={"h-fit bg-transparent "}
          Icon={
            <IoEyeOutline className="text-dark-purple w-5 h-5 cursor-pointer" />
          }
          isOpen={isViewModalOpen}
          onClose={toggleViewModal}
          onOpen={toggleViewModal}
        />
      </div>

      <div className="w-[67%] grid grid-flow-col auto-cols-fr ">
        <div>{message}</div>
        <div>{insertDate?.slice(0, 10)}</div>
      </div>

      <div className="lg:w-[4%] rounded-full h-[35px]"></div>
    </div>
  );
};

export default NotifTable;
