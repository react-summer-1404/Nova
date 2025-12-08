import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTeachersDetail } from "../../servises/api/teacherDetail";
import TeacherInformation from "../../components/section/teacherDetail/TeacherInformation/TeacherInformation";
import FilterTeacherCourses from "../../components/section/teacherDetail/FilterTeacherCourses/FilterTeacherCourses";
import ContactTeacher from "../../components/section/teacherDetail/ContactTeacher/ContactTeacher";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import ModalSection from "../../components/ui/Modal/ModalSection";
import { IoCallOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import { motion } from "framer-motion";
import { variantPages } from "../../configs/frameMorion/PagesVariants";
const CoachesDetailPage = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const { teacherId } = useParams();
  const { data: teacherDetail } = useQuery({
    queryKey: ["teacherDetail", teacherId],
    queryFn: () => getTeachersDetail(teacherId),
  });

  return (
    <div className="flex flex-col">
      <NavigationSection title={teacherDetail?.fullName} />

      <motion.div
        className="w-screen flex justify-center gap-6 py-[90px]"
        variants={variantPages}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:w-[80%] lg:w-[70%] w-4/5 items-end gap-15">
          <TeacherInformation teacherDetail={teacherDetail} />
          <FilterTeacherCourses TeacherId={teacherId} />
        </div>
        <div className="hidden lg:block">
          <ContactTeacher />
        </div>
        <div className="fixed z-50 right-4 bottom-8 lg:hidden block">
          <ModalSection
            content={<ContactTeacher />}
            Icon={<IoCallOutline size={34} color="white" />}
            StyleModal={" rounded-3xl w-[70px] h-[70px] bg-[#5751E1]"}
            isOpen={isOpen}
            onClose={toggleOpen}
            onOpen={toggleOpen}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CoachesDetailPage;
