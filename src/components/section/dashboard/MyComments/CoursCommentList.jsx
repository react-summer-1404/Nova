import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import useToggle from "../../../../hooks/useToggle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ModalSection from "../../../ui/Modal/ModalSection";
import { Button } from "@heroui/button";
import CourseProductCard from "../../../ui/card/CourseProductCard";
import { getCourseDetail } from "../../../../servises/api/coursesDetail/getDetail";
import { deleteCommentCourse } from "../../../../servises/api/coursesDetail/deleteComment";
import toast from "react-hot-toast";
import { CiMenuKebab } from "react-icons/ci";
import FormGroup from "../../CourseDetail/CourseComment/component/FormGroup";
import { Form, Formik } from "formik";
import { putEditComment } from "../../../../servises/api/userPanel/updateComment";
import YellowButton from "../../../ui/button/YellowButton";
import { LiaEdit } from "react-icons/lia";
const CoursCommentList = ({
  title,
  author,
  imageAddress,
  startTime,
  accept,
  courseId,
  id,
  describe,
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
    queryKey: ["coursesNewsDashboard", courseId],
    queryFn: () => getCourseDetail(courseId),
    enabled: !!courseId,
  });

  const mutationCourseDelete = useMutation({
    mutationFn: (id) => deleteCommentCourse(id),
    onSuccess: () => {
      toast.success("کامنت  با موفقیت حذف شد");
      queryClient.invalidateQueries(["CourseComment"]);
      setIsDeleteModalOpen(false);
    },
    onError: (error) => {
      console.log("خطا", error), toast.error("حذف کامنت با خطا مواجه شد");
    },
  });
  const mutationCommentEdit = useMutation({
    mutationFn: (formData) => putEditComment(formData),
    onSuccess: (data) => {
      const msg = data?.message;
      toast.success(msg);
      queryClient.invalidateQueries(["CourseComment"]);
      toggleViewModal();
    },
    onError: (error) => {
      const msg = error?.response?.data?.message;
      toast.error(msg);
      console.log("خطا", error);
    }
  });

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("Title", values.Title);
      formData.append("Describe", values.Describe);
      formData.append("CommentId", id);
      formData.append("CourseId", courseId);

      await mutationCommentEdit.mutateAsync(formData);
    } catch (error) {
      console.log("خطا در ارسال فرم:", error);
    }
  };
  return (
    <div className="justify-center items-center gap-8 flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]">
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
                  <CourseProductCard product={data} />
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
                  onPress={() => mutationCourseDelete.mutate(id)}
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
            <LiaEdit className="text-dark-purple w-5 h-5 cursor-pointer" />
          }
          isOpen={isViewModalOpen}
          onClose={toggleViewModal}
          onOpen={toggleViewModal}
          content={
          
            <div>
              <Formik
              initialValues={{
                Title: title,
                Describe: describe,
              }}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col justify-end gap-5">
                <FormGroup label={"عنوان"} name={"Title"} inputClass="h-[40px]" labelClass="-mb-1 mr-2" />
                <FormGroup label={"توضیحات کامنت"} name={"Describe"} inputClass="h-[100px]" labelClass="-mb-1 mr-2" as="textarea"/>
            <YellowButton type={"submit"} text={"ویرایش"} height={"35px"}/>
              </Form>
            </Formik>
            </div>
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

export default CoursCommentList;
