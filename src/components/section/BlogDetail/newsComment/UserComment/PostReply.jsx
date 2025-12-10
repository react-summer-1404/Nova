import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { FaArrowLeft } from "react-icons/fa";
import { Form, Formik, Field } from "formik";
import { postNewsReply } from "../../../../../servises/api/blogComments/replyComment";
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import YellowButton from "../../../../ui/button/YellowButton";

const validationSchema = Yup.object({
  title: Yup.string().required("وارد کردن عنوان اجباری است"),
  describe: Yup.string().required("وارد کردن توضیحات بیشتر اجباری است"),
});

const initialData = {
  title: "",
  describe: "",
};
const PostReply = ({ initialValues = initialData, newsId, parentId,userId  }) => {
  const token = localStorage.getItem("token");

  const { mutate } = useMutation({
    mutationFn: postNewsReply,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data?.message);
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
      parentId: parentId,
      title: values.title,
      describe: values.describe,
      userId:userId
    };
    mutate(apiParams);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-11/12 h-5/6 flex flex-col mt-5 items-end gap-2 md:gap-4">
        <p
          style={{ color: "var(--color-navy)" }}
          className="font-[600] text-[22px] md:text-[26px] "
        >
           پاسخ
        </p>
        <FormGroup label={"عنوان پیام"} name={"title"} inputClass="h-[40px]" />
        <FormGroup
          label={"توضیحات بیشتر"}
          name={"describe"}
          inputClass="h-[85px]"
        />
       
         
          <YellowButton  height={"30px"} icon={<FaArrowLeft className="ml-[6px] mt-[5px]" />} text={"ارسال نظر"} type={"submit"}/>
         
      </Form>
    </Formik>
  );
};

export default PostReply;
