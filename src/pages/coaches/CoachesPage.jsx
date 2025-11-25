import React from "react";
import TeacherCard from "../../components/section/landing/MasterMentors/TeacherCArd";
import { getTeachers } from "../../servises/api/teachers";
import { useQuery } from "@tanstack/react-query";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import { motion } from "framer-motion";
import { variantPages } from "../../configs/frameMorion/PagesVariants";

const CoachesPage = () => {
  const { data } = useQuery({
    queryKey: ["AllTeachers"],
    queryFn: getTeachers,
  });

  return (
    <div
      className="w-screen flex flex-col" >
      <NavigationSection title={"مربیان"} />
      <motion.div className="w-screen flex  md:px-6  justify-center py-8 "
        variants={variantPages}
        initial="hidden"
        animate="visible"
        exit="exit">
        <div className="w-fit md:w-full flex lg:justify-evenly justify-end p-4  flex-wrap gap-4 ">
          {data?.map((item) => (
            <div
              key={`${item.id} + ${item.fullName}`}
              className="lg:w-fit w-[200px] md:w-[300px] "
            >
              <TeacherCard
                fullName={item.fullName}
                pictureAddress={item.pictureAddress}
                courseCounts={item.courseCounts}
                id={item.teacherId}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CoachesPage;
