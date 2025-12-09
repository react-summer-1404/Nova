import React from "react";
import { useSearchParams } from "react-router-dom";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import TopSection from "../../components/section/CompareCourse/topSection";
import CoursesInfo from "../../components/section/CompareCourse/coursesInfo";
import vs from "../../assets/images/vs.svg";
const CompareCoursePage = () => {
  const [searchParams] = useSearchParams();
  const courseIds = searchParams.getAll("courseId");
  console.log("courseIds", courseIds);
  return (
    <div className="flex flex-col   w-screen  justify-center ">
      <NavigationSection title={"مقایسه دو دوره"} />
      <TopSection />
      <div className="flex-center flex-col gap-5 p-8">
        <div className="flex justify-between w-[80%]">
          <CoursesInfo cId={courseIds[0]} />
          <div className="h-[300px]  flex-center">
          <img className="w-[200px] h-[100px] pt-6 " src={vs} />

          </div>
          <CoursesInfo cId={courseIds[1]} />
        </div>
      </div>
    </div>
  );
};

export default CompareCoursePage;
