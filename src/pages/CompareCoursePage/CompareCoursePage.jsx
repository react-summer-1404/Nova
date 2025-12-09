import React from "react";
import { useSearchParams } from "react-router-dom";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import TopSection from "../../components/section/CompareCourse/topSection";
import CoursesInfo from "../../components/section/CompareCourse/coursesInfo";
import vs from "../../assets/images/vs.svg"
const CompareCoursePage = () => {
  const [searchParams] = useSearchParams();
  const courseIds = searchParams.getAll("courseId");
  console.log("courseIds", courseIds);
  return (
    <div className="flex flex-col   w-screen  justify-center ">
      <NavigationSection title={"مقایسه دو دوره"} />
      <TopSection />
      <div className="flex flex-col gap-5 p-8">
        <div className="flex">
        <CoursesInfo cId={courseIds[0]} />
          <img src={vs}/>
          <CoursesInfo cId={courseIds[1]} />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CompareCoursePage;
