import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BiBook } from "react-icons/bi";
import { FaArrowLeft, FaYoutube } from "react-icons/fa";
import { IoStatsChartOutline, IoTimeOutline } from "react-icons/io5";
import { PiCertificateThin, PiPuzzlePieceThin } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { getCourseDetail } from "../../../servises/api/coursesDetail/getDetail";
import AccentText from "../../ui/accentText/AccentText";
import ErrorMessage from "../landing/BlogSection/ErrorMessage";
import Loader from "../landing/BlogSection/Loader";
import CommunicationApp from "../landing/MasterMentors/CommunicationApp";
import CourseDetail from "./CourseDetail";
import FilterCourse from "./FilterCourse";
import NavigationSection from "../../ui/navigation/NavigationSection";
import YellowButton from "../../ui/button/YellowButton";
import {
  deleteReserveCourse,
  postReserveCourse,
} from "../../../servises/api/courses/ReserveCourse";
import { getMyReserveCourses } from "../../../servises/api/userPanel/getMyCoursesReserve";
import toast from "react-hot-toast";
import { getToken } from "../../../hooks/localStorage";
import { motion } from "framer-motion";
import { variantPages } from "../../../configs/frameMorion/PagesVariants";

const CourseBox = () => {
  const token = getToken();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["detail", id],
    queryFn: () => getCourseDetail(id),
  });

  const mutationReserve = useMutation({
    mutationFn: (id) => postReserveCourse(id),
    onSuccess: () => {
      toast.success("رزرو شد");
      queryClient.invalidateQueries(["detail"]);
    },
    onError: (error) => {
      toast.error("خطا  داد");
      console.log("error", error);
    },
  });
  const { data: reserveCourse } = useQuery({
    queryKey: ["reserveinfo"],
    queryFn: getMyReserveCourses,
    enabled: !!token && !!data,
  });

  const mutationReserveDelete = useMutation({
    mutationFn: (reserveId) => deleteReserveCourse(reserveId),
    onSuccess: () => {
      toast.success("رزرو دوره غیر فعال شد");
      queryClient.invalidateQueries(["detail"]);
      queryClient.invalidateQueries(["reserveinfo"]);
    },
    onError: (error) => {
      toast.error("خطا رخ داد");
      console.log("error", error);
    },
  });
  const isReserved = data?.isCourseReseve;

  const reservedCourse = reserveCourse?.find((item) => item.courseId == id);
  const reserveId = reservedCourse?.reserveId;
  // console.log(id)
  // console.log(data)

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorMessage message={error?.message || "خطای ناشناخته ای رخ داده"} />
    );
  }

  return (
    <div className="flex flex-col w-screen gap-20 items-center">
      <NavigationSection title={"حل تعارضات بین طراحان و مهندسان"} />
      <motion.div
        className=" w-screen flex justify-center gap-8 mr-[20px] mb-[30px]"
        variants={variantPages}
        initial="hidden"
        animate="visible"
      >
        <div className="w-[65%] flex items-end flex-col gap-7">
          <CourseDetail
            key={data.id}
            imageAddress={data.imageAddress}
            courseRate={data.courseRate}
            title={data.title}
            startTime={data.startTime.slice(0, 10)}
            teacherName={data.teacherName}
            studentCount={data.studentCount}
            describe={data.describe}
            teacherId={data.teacherId}
            currentUserRateNumber={data.currentUserRateNumber}
            courseId={data.courseId}
          />
        </div>
        <motion.div className="border border-[#DFDFDF] md:w-[18%] w-[24%] h-[590px] md:h-[670px] flex justify-center items-center shadow-[0_0_14px_0_rgba(0,0,0,0.08) rounded-[10px] "
         initial={{opacity:0,
          x:100,}}
         animate={{opacity:1,x:0}}
         transition={{delay:0.8 ,duration:0.3}}
        >
          <div className="w-[82%] flex flex-col items-end gap-5 ">
            <div
              style={{ backgroundColor: "var(--color-dark-purple)" }}
              className="w-full h-[90px] flex flex-col justify-center text-right rounded-[8px]"
            >
              <h2
                style={{ color: "var(--color-white)" }}
                className="font-[500] mr-[14px] text-[11px]  md:text-[15px]"
              >
                :هزینه این دوره
              </h2>
              <h3
                style={{ color: "var(--color-white)" }}
                className="font-[600] text-[16px] md:text-[22px] mt-[10px] mr-[25px] lg:mr-[40px]"
              >
                {data.cost} تومان
              </h3>
            </div>
            <p className="font-[600] text-[12px] md:text-[16px] text-black">
              {" "}
              :دوره شامل
            </p>
            <div className="flex border-b-[1px] border-[#D9D9D9] h-[20px] md:h-[30px] justify-between w-full ">
              <div className="font-[400] text-[10px] md:text-[14px] text-[#7F7E97]">
                {data.courseLevelName}
              </div>
              <div className="flex gap-1">
                <div className="font-[400] text-[12px] md:text-[16px] text-black">
                  سطح دوره
                </div>
                <IoStatsChartOutline
                  color="#7F7E97"
                  size={12}
                  className="mt-1.5"
                />
              </div>
            </div>
            <div className="flex border-b-[1px] border-[#D9D9D9] h-[20px] md:h-[30px] justify-between w-full ">
              <div className="font-[400] text-[10px] md:text-[14px] text-[#7F7E97]">
                {data.endTime.slice(0, 10)}
              </div>
              <div className="flex gap-1">
                <div className="font-[400] text-[11px] md:text-[16px] text-black">
                  پایان دوره{" "}
                </div>
                <IoTimeOutline color="#7F7E97" size={12} className="mt-1.5" />
              </div>
            </div>
            <div className="flex border-b-[1px] border-[#D9D9D9] h-[20px] md:h-[30px] justify-between w-full ">
              <div className="font-[400] text-[10px] md:text-[14px] text-[#7F7E97]"></div>
              <div className="flex gap-1">
                <div className="font-[400] text-[12px] md:text-[16px] text-black">
                  ازمون ها
                </div>
                <PiPuzzlePieceThin
                  color="#7F7E97"
                  size={12}
                  className="mt-1.5"
                />
              </div>
            </div>
            <div className="flex border-b-[1px] border-[#D9D9D9] h-[20px] md:h-[30px] justify-between w-full ">
              <div className="font-[400] text-[10px] md:text-[14px] text-[#7F7E97]"></div>
              <div className="flex gap-1">
                <div className="font-[400] text-[12px] md:text-[16px] text-black">
                  درس ها
                </div>
                <BiBook color="#7F7E97" size={12} className="mt-1.5" />
              </div>
            </div>
            <div className="flex border-b-[1px] border-[#D9D9D9] h-[20px] md:h-[30px] justify-between w-full ">
              <div className="font-[400] text-[12px] md:text-[16px] text-[#7F7E97]"></div>
              <div className="flex gap-1">
                <div className="font-[400] text-[12px] md:text-[16px] text-black">
                  گواهینامه ها
                </div>
                <PiCertificateThin size={12} className="mt-1.5" />
              </div>
            </div>
            <div className="flex border-b-[1px] border-[#D9D9D9] flex-col gap-1.5 h-[50px] md:h-[70px] w-full ">
              <div className="font-[400] text-[10px] md:text-[14px] text-right text-black">
                :پرداخت امن
              </div>
              <div className="flex gap-1">
                <img src="src/assets/images/6cce14a6fef39893ffec7aceae284a74f5721102.png" />
              </div>
            </div>
            <div className="flex border-b-[1px]  border-[#D9D9D9] flex-col gap-1.5 h-[80px] w-full ">
              <div className="font-[400]  text-[12px] md:text-[16px] text-right text-text-gray">
                : این دوره را به اشتراک بگذارید
              </div>
              <div className="w-[100%] md:w-[70%] md:ml-[20px] flex gap-1.5 md:gap-1.5 items-center">
                <CommunicationApp />{" "}
                <FaYoutube className="border-[#9292B4] rounded-full w-[30px] md:w-[25px] h-[25px] md:h-[25px] shadow-[2px_3px_0px_0px_#00000040]" />
              </div>
            </div>
            <div className="w-full font-[600] text-[14px] flex justify-center">
              <YellowButton
                bgColor={isReserved ? "green" : ""}
                icon={<FaArrowLeft />}
                text={isReserved ? "رزرو شده" : "رزرو دوره"}
                type="button"
                width="100%"
                height="30px"
                onClick={() => {
                  if (isReserved) {
                    mutationReserveDelete.mutate(reserveId);
                  } else {
                    mutationReserve.mutate(id);
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="w-[920px] h-[700px] flex-col flex mr-[260px]">
        <div className="mr-[30px] lg:mr-0">
          <AccentText title={"دوره های "} afterLabel={"مرتبط"} />
        </div>

        <FilterCourse courseLevelId={data?.courseLevelId} />
      </div>
    </div>
  );
};

export default CourseBox;
