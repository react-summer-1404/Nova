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
import { Link } from "react-router-dom";
import { getCourses } from "../../../../servises/api/courses/coursList";
import MedalSection from "./MedalSection";
const UserDashboard = () => {
  const { data } = useQuery({
    queryKey: ["usercurrentinfodashboard"],
    queryFn: getCurrentUserProfile,
  });

  const { data: newsData } = useQuery({
    queryKey: "dashboardnews",
    queryFn: () => getBlogs(),
  });

  const { data: myCourseData } = useQuery({
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
  const { data: Courses } = useQuery({
    queryKey: ["getCourses2"],
    queryFn: getCourses,
  });
  const currentCourse = Courses?.courseFilterDtos;
  const activeCourses = currentCourse?.filter((item) => item.active == true);
  const myCoursesComment = courseComment?.myCommentsDtos;
  const myNewsComment = newsComment?.myNewsCommetDtos;
  const totalComments = myNewsComment?.length + myCoursesComment?.length;

  return (
    <div className="flex-center flex-col gap-8  ">
      <div className=" flex  gap-2 items-center  justify-between  w-full ">
        <CourseInfoCard
          icon={
            <GoComment
              size={10}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-2.5 text-center bg-dark-purple text-white rounded-[50px]"
            />
          }
          courseCount={totalComments}
          subtext={"نظر داده اید"}
        />
        <CourseInfoCard
          icon={<CiHeart className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-2.5 text-center bg-dark-purple text-white rounded-[50px]" />}
          courseCount={favCourses?.favoriteCourseDto?.length}
          subtext={"دوره علاقه نشان دادید"}
        />
        <CourseInfoCard
          icon={
            <CiShoppingCart className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-2.5 text-center bg-dark-purple text-white rounded-[50px] " />
          }
          courseCount={myCourseData?.length}
          subtext={"دوره رزرو کردید"}
        />
        <CourseInfoCard
          icon={
            <PiGraduationCapThin className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-2.5 text-center bg-dark-purple text-white rounded-[50px]" />
          }
          courseCount={myCourseData?.length}
          subtext={"دوره شرکت کردید"}
        />
      </div>
      <div className="w-full flex justify-between gap-16 md:flex-row flex-col">
        <div className="flex-center bg-soft-gray radius10 h-[215px]  md:w-1/2">
          <ProfileProgrgressBar
            profileCompletionPercentage={data?.profileCompletionPercentage}
          />
        </div>
        <div className="bg-light-purple radius10 h-[215px] md:w-1/2 flex-center flex-col ">
          <MedalSection data={myCourseData?.length} />
          <p className="text-gray-600 text-sm mt-2">
            با شرکت در دوره‌ها می‌تونی خودت رو ارتقا بدی و مدال‌های بالاتر
            بگیری.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between gap-16 md:flex-row flex-col">
        <div className="w-full flex-center flex-col justify-end items-end gap-5 ">
          <h4 className="text-[18px] text-base-gray  w-full text-right">
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
          <Link to="/blogs">
            <span className="text-gray-500">{"< مشاهده همه"}</span>
          </Link>
        </div>
        <div className="w-full flex-center flex-col justify-end items-end gap-5 ">
          <h4 className="text-[18px] text-base-gray  w-full text-right">
            دوره های در حال برگزاری
          </h4>
          {activeCourses?.slice(0, 2).map((course) => {
            return (
              <CurrentCourseCard
                title={course.title}
                cost={course.cost}
                teacherName={course.teacherName}
                img={course.imageAddress}
              />
            );
          })}
          <Link to="/courses">
            <span className="text-gray-500">{"< مشاهده همه"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
