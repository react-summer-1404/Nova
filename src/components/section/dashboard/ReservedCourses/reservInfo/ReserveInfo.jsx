import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import ModalSection from "../../../../ui/Modal/ModalSection";
import useToggle from "../../../../../hooks/useToggle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CourseProductCard from "../../../../ui/card/CourseProductCard";
import { getCourseDetail } from "../../../../../servises/api/coursesDetail/getDetail";
import { Button } from "@heroui/button";
import { deleteReserveCourse } from "../../../../../servises/api/courses/ReserveCourse";
import toast from "react-hot-toast";
const ReserveInfo = ({
  courseTitle,
  teacheName,
  lastUpdate,
  accept,
  image,
  courseId,
  reservedId,
}) => {
  const acceptStatus = accept ? (
    <p className="text-[#005A34]">تایید شده</p>
  ) : (
    <p className="text-[#DE5204]"> در انتظار تایید</p>
  );

  const [isDeleteModalOpen, toggleDeleteModal, setIsDeleteModalOpen] = useToggle(false);
  const [isViewModalOpen, toggleViewModal] = useToggle(false);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["coursesDashboard", courseId],
    queryFn: () => getCourseDetail(courseId),
    enabled: !!courseId,
  });
  const mutationDelete = useMutation({
    mutationFn: (reservedId) => deleteReserveCourse(reservedId),
    onSuccess: () => {
      toast.success("دوره  با موفقیت حذف شد");
      queryClient.invalidateQueries(["reserveCourse"]);
      setIsDeleteModalOpen(false);
    },
    onError: (error) => {
      console.log("خطا", error), toast.error("حذف دوره با خطا مواجه شد");
    },
  });

  return (
    <div className=" justify-center items-center gap-2 flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] ">
      <div className="flex w-[100px] gap-2">
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
          content={
            isLoading ? (
              <p>در حال بارگذاری...</p>
            ) : (
              <div className="w-full flex-center">
                <CourseProductCard product={data} />
              </div>
            )
          }
        />
      </div>

      <div className="w-[67%] grid grid-flow-col auto-cols-fr ">
        <div>{acceptStatus}</div>
        <div>{lastUpdate}</div>
        <div>{teacheName}</div>
        <div>{courseTitle}</div>
      </div>

      <img src={image} className="w-8 h-8 rounded-full" alt={courseTitle} />
      <div className="lg:w-[4%] rounded-full h-[35px]"></div>
    </div>
  );
};

export default ReserveInfo;
