import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import FormGroup from "../../../CourseDetail/CourseComment/component/FormGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../../../servises/api/userPanel/getProfileInfo";
import Subject from "./Subject/Subject";
import { putEditProfile } from "../../../../../servises/api/userPanel/updateProfileInfo";
import toast from "react-hot-toast";
import ImageContainer from "./ImageContainer/ImageContainer";
import ButtonSection from "./ButtonSection/ButtonSection";

const validationSchema = yup.object({
  BirthDay: yup.string().required("*الزامی است"),
});
const EditUserInformation = () => {
  const { data: currentProf } = useQuery({
    queryKey: ["currentProfUser"],
    queryFn: getCurrentUserProfile,
  });
  console.log(currentProf)

  const mutation = useMutation({
    mutationFn: (formData) => putEditProfile(formData),
    onError: (error) => {
      console.log("خطا رخ داد", error);
      toast.error("خطا در ویرایش اطلاعات ! لطفا دوباره تلاش کنید");
    },
    onSuccess: () => {
      toast.success("پروفایل شما اپدیت شد");
    },
  });

  const submitHandling = async (values) => {
    try {
      const formData = new FormData();
      formData.append("FName", values.FName);
      formData.append("LName", values.LName);
      formData.append("NationalCode", values.NationalCode);
      formData.append("BirthDay", values.BirthDay);
      formData.append("TelegramLink", values.TelegramLink);
      formData.append("LinkdinProfile", values.LinkdinProfile);
      formData.append("UserAbout", values.UserAbout);
      formData.append("HomeAdderess", values.HomeAdderess);
      formData.append("Gender",values.Gender === "true");

      // formData.append("Latitude", values.Latitude);
      // formData.append("Longitude", values.Longitude);

      await mutation.mutateAsync(formData);
    } catch (error) {
      console.log("خطا در ارسال فرم:", error);
    }
  };
  return (
    <div className="w-screen  ">
<div className="flex flex-col w-[68%] gap-5  justify-start" style={{ direction: "rtl" }}>
      <Subject />
      <div className="flex w-full   justify-between ">
        <Formik
          initialValues={{
            FName: currentProf?.fName || "",
            LName: currentProf?.lName || "",
            NationalCode: currentProf?.nationalCode || "",
            BirthDay: currentProf?.birthDay || "",
            TelegramLink: currentProf?.telegramLink || "",
            HomeAdderess: currentProf?.homeAdderess || "",
            LinkdinProfile: currentProf?.linkdinProfile || "",
            UserAbout: currentProf?.userAbout || "",
            Gender:currentProf?.gender? String(currentProf.gender) : "",
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandling}
          enableReinitialize
        >
          <Form className="flex  gap-5 justify-between lg:flex-row flex-col  w-full">
            <div className="flex    flex-col ">
              <div className="flex gap-10  w-fit  md:flex-row flex-col">
                <div className="flex flex-col w-[200px] gap-5 ">
                  <FormGroup
                    type={"text"}
                    name={"FName"}
                    id={"FName"}
                    label={"نام"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    type={"number"}
                    name={"NationalCode"}
                    id={"NationalCode"}
                    label={"کد ملی"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    type={"text"}
                    name={"BirthDay"}
                    id={"BirthDay"}
                    label={"تاریخ تولد"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                    errorClass="text-[12px] w-full  text-right -mt-3 "
                  />

                  <FormGroup
                    type={"email"}
                    name={"gmail"}
                    id={"gmail"}
                    label={"ایمیل"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />
                </div>
                <div className="flex flex-col w-[200px]  gap-5">
                  <FormGroup
                    type={"text"}
                    name={"LName"}
                    id={"LName"}
                    label={"نام خانوادگی"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    name={"Gender"}
                    label={"جنسیت"}
                    as={"select"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  >
                    <option value="true">مرد</option>
                    <option value="false">زن</option>
                  </FormGroup>

                  <FormGroup
                    type={"number"}
                    name={"phoneNumber"}
                    id={"phoneNumber"}
                    label={"شماره همراه"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />

                  <FormGroup
                    type={"text"}
                    name={"TelegramLink"}
                    id={"TelegramLink"}
                    label={"تلگرام"}
                    inputClass="h-[35px]"
                    labelClass="indent-2 -mb-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <FormGroup
                  type={"text"}
                  name={"LinkdinProfile"}
                  id={"LinkdinProfile"}
                  label={"لینکدین"}
                  inputClass="h-[35px]"
                  labelClass="indent-2 -mb-2"
                />

                <FormGroup
                  type={"text"}
                  name={"HomeAdderess"}
                  id={"HomeAdderess"}
                  label={"ادرس"}
                  inputClass="h-[35px]"
                  labelClass="indent-2 -mb-2"
                />
              </div>
            </div>
            <div className=" flex flex-col w-full items-center gap-5 text-right">
              <ImageContainer currentProf={currentProf} />

              <FormGroup
                name={"UserAbout"}
                id={"UserAbout"}
                label={"درباره من"}
                inputClass="h-[135px] w-[300px] "
                labelClass="-mb-2  "
              ></FormGroup>
              <ButtonSection />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default EditUserInformation;
