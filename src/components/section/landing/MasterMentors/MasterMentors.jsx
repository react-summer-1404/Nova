import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TeacherCard from "./TeacherCArd";
import { useQuery } from "@tanstack/react-query";
import { getMasterTeacher } from "../../../../servises/api/landing/masterteacher";
import ErrorMessage from "../BlogSection/ErrorMessage";
import { Spinner } from "@heroui/react";
import { Link } from "react-router";
import PurpleBtn from "../../../ui/button/BlueButton";
import { useNavigate } from "react-router-dom";
const MasterMentors = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["topMentor"],
    queryFn: getMasterTeacher,
    retry: (failureCount, error) => {
      if (error?.response?.status == 429 && failureCount < 3) return true;
      return false;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="flex items-end min-h-[50vh] min-w-[80vh] ">
        <Spinner
          size="lg"
          labelColor="primary"
          label="درحال بارگزاری محصولاتیم"
          variant="wave"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorMessage message={error?.message || "خطای ناشناخته ای رخ داده"} />
    );
  }

  if (!data || data.length == 0) {
    return (
      <div className="h-[320px] flex items-center justify-center">
        <p style={{ color: "var(--color-text-gray2)" }} className="text-lg">
          هیچ معلم برتری ثبت نشده است.
        </p>
      </div>
    );
  }
  return (
    <div className="w-screen mt-[40px] flex">
      <div className="md:w-3/5 flex md:justify-end md:px-6">
        <div className="w-[100%] md:w-[90%] lg:w-[80%] grid grid-cols-1 gap-2 sm:grid-cols-2 p-4">
          {data?.slice(0, 4).map((item) => (
            <TeacherCard
              key={`${item.id} _ ${item.fullName}`}
              fullName={item.fullName}
              pictureAddress={item.pictureAddress}
              courseCounts={item.courseCounts}
              id={item.teacherId}
            />
          ))}
        </div>
      </div>

      <div className=" w-2/6 flex justify-center items-center ">
        <div className="md:w-[58%] w-[80%] text-right flex flex-col items-end md:gap-4 gap-1">
          <button className="lg:px-5 bg-light-purple text-dark-purple p-1 px-2 rounded-[30px] text-[8px] lg:text-[10px] ">
            معلم های ماهر
          </button>
          <p className=" font-[900] text-navy text-[16px] md:text-[18px] lg:text-[25px]">
            کلاس برتر ما و مربیان خبره در یک مکان
          </p>
          <h2 className="md:text-[11px] text-[8px] hidden sm:block text-text-gray lg:text-[14px]">
            هنگامی که یک چاپگر ناشناس یک گالری از نوع و کتاب نمونه درهم درست شده
            باقی نمانده است فقط پنج قرن
          </h2>

          <PurpleBtn
            BtnIcon={<FaArrowLeft />}
            height={"35px"}
            content={"همه مربیان رو ببینید"}
            onClick={() => navigate("/coaches")}
          />
        </div>
      </div>
    </div>
  );
};

export default MasterMentors;
