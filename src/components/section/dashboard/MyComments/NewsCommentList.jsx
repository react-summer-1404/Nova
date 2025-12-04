import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import useToggle from "../../../../hooks/useToggle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ModalSection from "../../../ui/Modal/ModalSection";
import { Button } from "@heroui/button";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import { CiMenuKebab } from "react-icons/ci";
import { getBlogsDetail } from "../../../../servises/api/newsDetail";
import { Spinner } from "@heroui/spinner";
import BlogCard from "../../Blogs/BlogCard";
const NewsCommentList = ({
  title,
  author,
  imageAddress,
  startTime,
  accept,
  newsId,
  id,
  
}) => {
  const acceptStatus = accept ? (
    <p className="text-[#005A34]">تایید شده</p>
  ) : (
    <p className="text-[#DE5204]"> در انتظار تایید</p>
  );
  const [isDeleteModalOpen, toggleDeleteModal, setIsDeleteModalOpen] =
  useToggle(false);
const [isViewModalOpen, toggleViewModal] = useToggle(false);
const [mobileView, toggleMobileView] = useToggle(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["coursesNewsDashboard", newsId],
    queryFn: () => getBlogsDetail(newsId),
    enabled: !!newsId,
  });
const comments = data?.detailsNewsDto
 console.log("data",data)
  return (
    <div className="justify-center items-center gap-8 flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]">
       <div className="md:hidden">
     <ModalSection
      StyleModal={"bg-transparent"}
        Icon={<CiMenuKebab/>}
        isOpen={mobileView}
        onClose={toggleMobileView}
        onOpen={toggleMobileView}
        content={
         <div className="flex flex-col gap-3">
          
           <div className="flex-col-center gap-5">
              <p className="text-navy">ایا از حذف این دوره اطمینن دارید؟</p>
              <div className="w-full flex-center">
             <BlogCard blogData={comments} />
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
                  onPress={() => console.log("حذف شد")}
                >
                  حذف
                </Button>
              </div>
            </div>
             
         </div>
        }
      />
     </div>
      <div className="w-[10%] lg:w-[5%] md:flex hidden">
      <ModalSection
          StyleModal={"h-fit bg-transparent"}
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
                  onPress={() => console.log("حذف شد")}
                >
                  حذف
                </Button>
              </div>
            </div>
          }
        />

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
                <BlogCard blogData={comments} />
              </div>
            )
          }
        />
      </div>
      <div className="w-[64%] grid grid-flow-col auto-cols-fr">
        <div>{startTime}</div>
        <div>{acceptStatus}</div>
        <div>{title}</div>
        <div>{author}</div>
      </div>
      <div className=" lg:w-[4%] rounded-full h-[35px]">{imageAddress}</div>
    </div>
  );
};

export default NewsCommentList;
