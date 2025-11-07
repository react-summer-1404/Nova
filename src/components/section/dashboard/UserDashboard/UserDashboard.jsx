import React, { useState } from "react";
import ProfileProgrgressBar from "./ProfileProgrgressBar";
import CurrentCourseCard from "./CurrentCourseCard";
import { getCurrentUserProfile } from "./../../../../servises/api/userPanel/getProfileInfo/index";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../../servises/api/news/getNews";
import CourseInfoCard from "./CourseInfoCard";
import { CiShoppingCart } from "react-icons/ci";
// import { getCourses } from "./../../../../servises/api/courses/coursList/index";
// import { getMyCourses } from "../../../../servises/api/userPanel/getMyCourses";
// import { getMyReserveCourses } from "../../../../servises/api/userPanel/getMyCoursesReserve";

const UserDashboard = () => {
  const [rowsOfPage, setrowsOfPage] = useState("2");

  const { data } = useQuery({
    //ببرای پروسس بار
    queryKey: "usercurrentinfo",
    queryFn: () => getCurrentUserProfile(),
  });

  const { data: newsData } = useQuery({
    // برای اخبار
    queryKey: "dashboardnews",
    queryFn: () => getBlogs(),
  });

  // const { data: myCourseData } = useQuery({
  //   // برای کورسها
  //   queryKey: ["coursegetCoursesnews"],
  //   queryFn: () => getMyReserveCourses(),
  // });

  return (
    <div className="flex flex-col gap-13">
      <div className=" flex-right gap-6 items-center">
       
       {/* {
        myCourseData.
       } */}
       
        {/* <CourseInfoCard
          icon={
            <CiShoppingCart className="course-info-card-icon rounded-[50px]" />
          }
          courseCount={"۲ دوره"}
          subtext={"رزرو کرده اید"}
        />
        <CourseInfoCard
          icon={
            <PiGraduationCapThin className="course-info-card-icon rounded-[50px]" />
          }
          courseCount={"4 دوره"}
          subtext={"شرکت کرده اید"}
        /> */}
      </div>
      <div className="w-full justy-between">
        <div className="h- bg-soft-gray radius10">
          <ProfileProgrgressBar
            profileCompletionPercentage={data?.profileCompletionPercentage}
          />
        </div>
        <div className="flex-col-right gap-8">
          <h4 className="text-[18px] text-base-gray">
            {" "}
            : جدیدترین اخبار و مقالات
          </h4>
          {newsData?.news?.slice(0, 2).map((news) => {
            return (
              <CurrentCourseCard
                title={news.title}
                classTime={news.updateDate}
                teacherName={news.addUserFullName}
                img={news.currentImageAddress}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col justify-end items-end gap-5">
        <h4 className="text-[18px] text-base-gray">
          : دوره های در حال برگزاری
        </h4>
        <CurrentCourseCard
          title={"آموزش Tailwind css"}
          classTime={"چهارشنبه ها . ۱۷:۳۰"}
          teacherName={"مهدی اصغری"}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
