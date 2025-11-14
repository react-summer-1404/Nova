import { Form, Formik, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import { postNewsComment } from "../../../../../servises/api/blogComments/comment";
import YellowButton from "../../../../ui/button/YellowButton";

const validationSchema = Yup.object({
  title: Yup.string().required("وارد کردن عنوان اجباری است"),
  describe: Yup.string().required("وارد کردن توضیحات بیشتر اجباری است"),
});

const initialData = {
  title: "",
  describe: "",
};

const NewsForm = ({ initialValues = initialData, newsId }) => {
  // console.log("url newsId: ", newsId);
  const token = localStorage.getItem("token");

  const { mutate } = useMutation({
    mutationFn: postNewsComment,
    onSuccess: (data) => {
      if (data.success) {
        toast.success("نظر با موفقیت ثبت شد در انتظار تایید مدیران ...");
      } else {
        toast.error("ارسال نظر با خطا مواجه شد");
      }
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "خطای ناشناخته ای رخ داد";
      toast.error(message);
    },
  });

  const handleSubmit = async (values) => {
    if (!token) {
      toast.error("برای ارسال نظر ابتدا وارد شوید");
      return;
    }
    const apiParams = {
      newsId: newsId,
      title: values.title,
      describe: values.describe,
    };
    mutate(apiParams);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className=" h-5/6 flex flex-col items-end gap-2 md:gap-4 w-[90%] ">
        <p className="font-[600] text-[22px] md:text-[26px] ">ارسال نظر</p>
        <FormGroup label={"عنوان پیام"} name={"title"} inputClass="h-[40px]" />
        <FormGroup
          label={"توضیحات بیشتر"}
          name={"describe"}
          inputClass="h-[85px]"
        />
        <h4 className="font-[400] text-[#6D6C80] text-[10px] md:text-[14px]">
          نظر شما پس از تایید توسط ادمین ثبت خواهد شد!
        </h4>
        <YellowButton
        icon={<FaArrowLeft/>}
        text={"ارسال نظر"}
        type={"submit"}
        height={"35px"}
        />
      </Form>
    </Formik>
  );
};

export default NewsForm;
