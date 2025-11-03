import React from "react";
import "../../assets/styles/variable.css";
import "../../assets/styles/global.css";
import { useQuery } from "@tanstack/react-query";
import { getTeachersDetail } from "../../servises/api/teacherDetail";
import TeacherInformation from "../../components/section/teacherDetail/TeacherInformation/TeacherInformation";
import FilterTeacherCourses from "../../components/section/teacherDetail/FilterTeacherCourses/FilterTeacherCourses";
import ContactTeacher from "../../components/section/teacherDetail/ContactTeacher/ContactTeacher";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import ModalSection from "../../components/ui/Modal/ModalSection";
import { IoCallOutline } from "react-icons/io5";
const CoachesDetailPage = () => {
  // const {teacherId} =useParams();
  const TeacherId = 1;
  const { data: teacherDetail } = useQuery({
    queryKey: ["teacherDetail", TeacherId],
    queryFn: () => getTeachersDetail(TeacherId),
  });

  return (
   <div className="flex flex-col">
        <NavigationSection title={teacherDetail?.fullName}/>

     <div className="w-screen flex justify-center gap-[20px] py-[90px]">
      <div className="flex flex-col md:w-[80%] lg:w-[60%] w-4/5 items-end gap-15">
        <TeacherInformation teacherDetail={teacherDetail} />
        <FilterTeacherCourses TeacherId={TeacherId} />
      </div>
     <div className="hidden lg:block">
     <ContactTeacher/>
     </div>
     <div className="fixed z-50 right-8 bottom-8">
     <ModalSection content={<ContactTeacher/>} Icon={<IoCallOutline size={34} color="white"/>} />
     </div>
    </div>
   </div>
  );
};

export default CoachesDetailPage;
