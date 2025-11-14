import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import useToggle from "../../../../../hooks/useToggle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useNewsFavorite from "../../../../../core/store/newsFavoriteStore";
import ModalSection from "../../../../../components/ui/Modal/ModalSection";
import {getBlogsDetail} from "../../../../../servises/api/newsDetail"
import BlogCard from "../../../../../components/section/Blogs/BlogCard"
import { Button } from "@heroui/button";
import {deleteAddToFavoriteNews} from "../../../../../servises/api/news/addToFavorite"


const FavNewsList1 = ({ title, currentImageAddress, insertDate, auther,id,newsId }) => {
  const {removeFavorite} = useNewsFavorite()

  const [isDeleteModalOpen, toggleDeleteModal, setIsDeleteModalOpen] =
  useToggle(false);
const [isViewModalOpen, toggleViewModal] = useToggle(false);

const queryClient = useQueryClient();

const { data, isLoading } = useQuery({
  queryKey: ["newsFavDashboard", newsId],
  queryFn: () => getBlogsDetail(newsId),
  enabled: !!newsId,
});

const mutationFavoriteNewsDelete = useMutation({
  mutationFn: (id) => deleteAddToFavoriteNews(id),
  onSuccess: () => {
    toast.success("دوره  با موفقیت حذف شد");
    queryClient.invalidateQueries(["favCourse"]);
    setIsDeleteModalOpen(false);
    removeFavorite(newsId)
  },
  onError: (error) => {
    console.log("خطا", error), toast.error("حذف دوره با خطا مواجه شد");
  },
});

  return (
    <div className="justify-center items-center gap-2 flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]">
      
      <div className="w-[10%] lg:w-[6%] gap-2  flex text-dark-purple">
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
                <button
                  className="w-[70px] h-[35px] bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition-all duration-200"
                  onPress={() => setIsDeleteModalOpen(false)}
                >
                  لغو
                </button>

                <Button
                  className="w-[70px] h-[35px] bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-200 shadow-sm"
                  onPress={() => mutationFavoriteNewsDelete.mutate(id)}
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
              <p>در حال بارگذاری...</p>
            ) : (
              <div className="w-full flex-center">
                <BlogCard blogData={data?.news}/>
              </div>
            )
          }
        />
      </div>

      <div className="w-[67%] grid grid-flow-col auto-cols-fr">
        <div>{insertDate}</div>
        <div>{auther}</div>
        <div>{title}</div>
      </div>

      <div className="lg:w-[4%] rounded-full w-8 h-8">
        <img
          src={currentImageAddress}
          alt={title}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

    </div>
  );
};

export default FavNewsList1;
