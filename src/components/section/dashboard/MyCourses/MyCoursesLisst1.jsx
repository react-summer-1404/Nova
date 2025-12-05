import React from "react";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import useToggle from "../../../../hooks/useToggle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import ModalSection from "../../../ui/Modal/ModalSection";
import { Button } from "@heroui/button";
import toast from "react-hot-toast";
import { CiMenuKebab } from "react-icons/ci";
import { getCourseDetail } from "../../../../servises/api/coursesDetail/getDetail";
import { Spinner } from "@heroui/spinner";
import { Link } from "react-router-dom";
const CourseStatusList1 = ({
  courseTitle,
  teacheName,
  lastUpdate,
  imageAddress,
  courseId,
  id,
  cost
}) => {
  const [isDeleteModalOpen, toggleDeleteModal, setIsDeleteModalOpen] =
    useToggle(false);
  const [isViewModalOpen, toggleViewModal] = useToggle(false);
  const [mobileView, toggleMobileView] = useToggle(false);

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["MyCoursesDashboard", courseId],
    queryFn: () => getCourseDetail(courseId),
    enabled: !!courseId,
  });
  const payMutation = useMutation({
// mutationFn:
onSuccess:()=>{
    toast.success("درخواست موفیت  امیز بود")
},
onError:(error)=>{
    const msg = error?.response?.data?.message
    toast.error(msg)
    console.log("error=====>",error)
}

  })

console.log("data=====>",data)

  return (
    <div className="justify-center items-center gap-2 flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]">
       {/* <div className="md:hidden"> */}
     {/* <ModalSection
      StyleModal={"bg-transparent"}
        Icon={<CiMenuKebab/>}
        isOpen={mobileView}
        onClose={toggleMobileView}
        onOpen={toggleMobileView}
        content={
         <div className="flex flex-col gap-3">
          
           \
             
         </div>
        }
      /> */}
     {/* </div> */}
      <div className="w-[10%] lg:w-[6%] gap-2  flex  text-dark-purple">
      {/* <ModalSection
          StyleModal={"h-fit bg-transparent"}
          Icon={
            <HiOutlineCreditCard className="text-dark-purple w-5 h-5 cursor-pointer" />
          }
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          onOpen={toggleDeleteModal}
          content={
            <div className="flex-col-center gap-5">
             oo
            </div>
          }
        /> */}
        

        <ModalSection
          StyleModal={"h-fit bg-transparent"}
          Icon={
            <IoEyeOutline className="text-dark-purple w-5 h-5 cursor-pointer" />
          }
          isOpen={isViewModalOpen}
          onClose={toggleViewModal}
          onOpen={toggleViewModal}
          content={
            isLoading ? (
                <Spinner
                size="lg"
                labelColor="primary"
                label="درحال بارگزاری "
                variant="wave"
              />
            ) : (
              <div className="w-full flex-center">
                <CourseProductCard product={data} />
              </div>
            )
          }
        />
      </div>
      <div className="w-[67%] grid grid-flow-col auto-cols-fr">
        <div>{cost}</div>
        <div>{teacheName}</div>
        <div>{lastUpdate}</div>
        <div>{courseTitle}</div>
      </div>
      <img className="w-8 h-8 rounded-full" src={imageAddress||"/default.png"} />
      <div className=" lg:w-[4%] rounded-full h-[35px]"></div>
    </div>
  );
};

export default CourseStatusList1;
