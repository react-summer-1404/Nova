import React from "react";
import "../../assets/styles/variable.css";
import "../../assets/styles/global.css";
import { useQuery } from "@tanstack/react-query";
import { getTeachersDetail } from "../../servises/api/teacherDetail";
import TeacherInformation from "../../components/section/teacherDetail/TeacherInformation/TeacherInformation";
import FilterTeacherCourses from "../../components/section/teacherDetail/FilterTeacherCourses/FilterTeacherCourses";



const CoachesDetailPage = () => {
  // const {teacherId} =useParams();
  const TeacherId = 1;
  const { data:teacherDetail } = useQuery({
    queryKey: ["teacherDetail",TeacherId],
    queryFn: () => getTeachersDetail(TeacherId),
  });
  
  return (
    <div className="w-screen flex justify-center gap-[50px]">
    <div className="flex flex-col border  w-[60%] items-end gap-4" >
       <TeacherInformation
       teacherDetail={teacherDetail}
       />
      <FilterTeacherCourses TeacherId={TeacherId}/>
    </div>
      <div className="w-[280px] h-[570px] bg-amber-200"> side</div>
      </div>
  );
};

export default CoachesDetailPage;
