import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import CommunicationApp from "./CommunicationApp";
import TeacherCard from "./TeacherCArd";
import Dummy_teacher from "./TeacherData";
import { useQuery } from "@tanstack/react-query";
import { getMasterTeacher } from "../../../../servises/api/landing/masterteacher";
import Loader from "../BlogSection/Loader";
import ErrorMessage from "../BlogSection/ErrorMessage";
import { Spinner } from "@heroui/react";
import { Link } from "react-router";

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

  if (isLoading) {
    return (
      <div className="flex items-end min-h-[50vh]  min-w-[80vh] ">
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
    <div className="w-screen h-[320px] flex">
      <div className="w-3/5 flex md:justify-end md:px-6">
        <div className="w-[90%] md:w-[80%] grid grid-cols-2 p-4">
          {data?.slice(0, 4).map((item) => (
            <TeacherCard
              key={item.id}
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
          <button
            style={{
              color: "var(--color-dark-purple)",
              backgroundColor: "var(--color-light-purple)",
            }}
            className="md:px-5 p-1 px-2.5 rounded-[30px] text-[10px] "
          >
            معلم های ماهر
          </button>
          <p
            style={{ color: "var(--color-navy)" }}
            className=" font-[900] text-[18px] md:text-[30px]"
          >
            کلاس برتر ما و مربیان خبره در یک مکان
          </p>
          <h2
            style={{ color: "var(--color-text-gray)" }}
            className="text-[11px] md:text-[14px]"
          >
            هنگامی که یک چاپگر ناشناس یک گالری از نوع و کتاب نمونه درهم درست شده
            باقی نمانده است فقط پنج قرن
          </h2>
          <button
            type="submit"
            style={{
              color: "var(--color-white)",
              backgroundColor: "var(--color-dark-purple)",
            }}
            className=" text-[10px] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] rounded-full flex gap-1 p-1 md:text-[12px]px-4 items-center"
          >
            <FaArrowLeft size={13} />
            <Link to={"/coaches"}>
              <span className="text-[11px] md:text-[14px]">
                همه مربیان را ببینید
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasterMentors;
