import React from "react";
import { FaStar } from "react-icons/fa";
import { PiStudentThin } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import CourseExplanation from "./CourseExplanation/CourseExplanation";
import CourseComment from "./CourseComment/CourseComment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarRate from "../../ui/StarRate/StarRate";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postCourseRate } from "../../../servises/api/courses/courseRate";

const CourseDetail = ({
  imageAddress,
  courseRate,
  title,
  startTime,
  teacherName,
  describe,
  studentCount,
  teacherId,
  currentUserRateNumber,
  courseId
}) => {
  const [selected, setSelected] = useState("بررسی اجمالی");
  const courseRateMutation = useMutation({
    mutationFn: ({ CourseId, RateNumber }) => postCourseRate(CourseId, RateNumber),
    onError: (error) => {
      console.log("error", error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: () => {
      toast.success("امتیاز شما ثبت شد");
    },
  });
  return (
    <div className="flex flex-col gap-7">
      <img
        src={imageAddress || "/default.png"}
        className="lg:h-[400px] sm:h-[300px] w-[70%] sm:w-[85%] sm:ml-[70px] ml-[100px] lg:w-[900px] lg:ml-[0px] rounded-[15px]"
      />
      <div className="flex flex-col items-end gap-2.5 md:gap-4">
        <div className="flex justify-between md:gap-3.5 gap-2">
          <div className="text-text-gray text-[9px] lg:text-[14px] sm:text-[11px] font-[400] flex items-center gap-1">
            ({courseRate} امتیاز)
            <FaStar md:size={"16px"} color="#F8BC24" />
          </div>
          <button
            className="bg-light-purple lg:px-9 p-1 sm:px-3 px-2 rounded-[30px] flex items-center"
            type="submit"
          >
            <span className="font-[500] text-[8px] sm:text-[10px] lg:text-[13px] text-black">
              {title}
            </span>
          </button>
        </div>
        <div className="flex justify-between  w-full">
         
          <StarRate
            initialRateNumber={currentUserRateNumber}
            onRate={(star) => {
                courseRateMutation.mutate({ CourseId:courseId, RateNumber: star });
            }}
          />
           <p className="md:text-[30px] text-[18px] font-[600] text-text-gray">
            {title}
          </p>
        </div>
        <div className="flex items-center md:gap-12 gap-3.5">
          <div
            style={{ direction: "rtl" }}
            className="text-[#7F7E97] font-[400] text-[12px] md:text-[16px] flex items-center gap-0.5 md:gap-1.5"
          >
            <PiStudentThin size={19} />
            {studentCount} دانش آموز
          </div>
          <div
            style={{ color: "var(--color-text-gray2)" }}
            className="font-[400] text-[9px] sm:text-[12px] lg:text-[16px] flex items-center gap-0.5 md:gap-1.5"
          >
            {startTime}
            <CiCalendar size={10} sm:size={19} />
          </div>

          <Link to={`/coachesDetail/${teacherId}`}>
            <motion.div
              className="flex items-center md:gap-3 gap-1"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1, 1, 1.2, 1] }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              <h3 className="font-[400] text-[12px] md:text-[16px] whitespace-nowrap text-navy">
                {teacherName}
              </h3>
              <h2 className="text-[#7F7E97] font-[400] text-[12px] md:text-[16px]">
                توسط
              </h2>
              <img
                src={imageAddress || "/default.png"}
                className=" rounded-full w-[45px] h-[44px]"
              />
            </motion.div>
          </Link>
        </div>

        <div className="flex mt-[15px] flex-col lg:w-[870px] sm:w-[85%] w-[70%] mr-[4px] gap-0.5 sm:gap-2 lg:gap-3">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            variant="unstyled"
            classNames={{
              tabList:
                "flex md:ml-[230px] ml-[0px] md:w-[75%] mb-[10px] h-[65px] bg-transparent",
              tabContent:
                "bg-[#E6E9EF] rounded-full py-1 lg:py-2 sm:w-[80px] lg:w-[130px] sm:text-[10px] text-[8px] lg:text-[14px] font-[600] text-[#6D6C80] transition-all duration-300 group-data-[selected=true]:bg-[#5751E1] group-data-[selected=true]:text-[#FFFFFF] group-data-[selected=true]:shadow-[4px_6px_0px_0px_rgba(5,0,113,1)]",
              tab: "lg:w-[24%] w-[22%]",
            }}
          >
            <Tab key="نظرات کاربران" title="نظرات کاربران" className="tr">
              <Card>
                <CardBody>
                  <CourseComment
                    teacherName={teacherName}
                    imageAddress={imageAddress}
                  />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="مربیان" title="مربیان">
              <Card>
                <CardBody></CardBody>
              </Card>
            </Tab>
            <Tab key="برنامه تحصیلی" title="برنامه تحصیلی">
              <Card>
                <CardBody></CardBody>
              </Card>
            </Tab>
            <Tab key="بررسی اجمالی" title="بررسی اجمالی">
              <Card>
                <CardBody className="bg-transparent">
                  <CourseExplanation describe={describe} />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
