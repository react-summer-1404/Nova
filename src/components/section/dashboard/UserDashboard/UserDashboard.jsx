import React, { useState } from "react";
import ProfileProgrgressBar from "./ProfileProgrgressBar";
import CurrentCourseCard from "./CurrentCourseCard";
import { getCurrentUserProfile } from "./../../../../servises/api/userPanel/getProfileInfo/index";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../../servises/api/news/getNews";
import CourseInfoCard from "./CourseInfoCard";
import { CiShoppingCart } from "react-icons/ci";
import { getMyReserveCourses } from "../../../../servises/api/userPanel/getMyCoursesReserve";
import { PiGraduationCapThin } from "react-icons/pi";
import { NewsComment } from "../../../../servises/api/userPanel/getNewsComment";
import { CourseComment } from "../../../../servises/api/userPanel/getCourseComment";
import { GoComment } from "react-icons/go";
import { favCourse } from "../../../../servises/api/userPanel/getMyFavoriteCourses";
import { CiHeart } from "react-icons/ci";
const UserDashboard = () => {
  const { data } = useQuery({
    //ببرای پروسس بار
    queryKey: ["usercurrentinfodashboard"],
    queryFn: getCurrentUserProfile,
  });

  const { data: newsData } = useQuery({
    // برای اخبار
    queryKey: "dashboardnews",
    queryFn: () => getBlogs(),
  });

  const { data: myCourseData } = useQuery({
    // برای کورسها
    queryKey: ["getMyReserveCourses2"],
    queryFn: getMyReserveCourses,
  });
  const { data: newsComment } = useQuery({
    queryKey: ["NewsComment2"],
    queryFn: NewsComment,
  });

  const { data: courseComment } = useQuery({
    queryKey: ["CourseComment2"],
    queryFn: CourseComment,
  });
  const { data: favCourses } = useQuery({
    queryKey: ["favCourse"],
    queryFn: favCourse,
  });
  const myCoursesComment = courseComment?.myCommentsDtos;
  const myNewsComment = newsComment?.myNewsCommetDtos;
  const totalComments = myNewsComment?.length + myCoursesComment?.length;
  console.log("object", favCourses);
  return (
    <div className="flex flex-col gap-8 border">
      <div className=" flex  gap-6 items-center justify-evenly">
        <CourseInfoCard
          icon={
            <GoComment
              size={10}
              className="course-info-card-icon rounded-[50px]"
            />
          }
          courseCount={totalComments}
          subtext={"نظر داده اید"}
        />
         <CourseInfoCard
          icon={
            <CiHeart className="course-info-card-icon rounded-[50px]" />
          }
          courseCount={favCourses?.favoriteCourseDto?.length}
          subtext={"دوره علاقه نشان دادید"}
        />
        <CourseInfoCard
          icon={
            <CiShoppingCart className="course-info-card-icon rounded-[50px] " />
          }
          courseCount={myCourseData?.length}
          subtext={"دوره رزرو کردید"}
        />
        <CourseInfoCard
          icon={
            <PiGraduationCapThin className="course-info-card-icon rounded-[50px]" />
          }
          courseCount={myCourseData?.length}
          subtext={"دوره شرکت کردید"}
        />

       
      </div>
      <div className="w-full flex-wrap flex-right gap-16">
        <div className="h- bg-soft-gray radius10 h-[215px] ">
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
