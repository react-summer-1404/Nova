import React from "react";
import woman from "../../../../../assets/images/banner_img.png.svg";
import pattern from "../../../../../assets/images/bg_dots.svg.svg";
import shape from "../../../../../assets/images/banner_shape01.png.svg";
import AvatarComponent from "../../../../ui/Avatar/Avatar";
import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../../../../../servises/api/teachers";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ImageSection = () => {
  const { data } = useQuery({
    queryKey: ["teacherLanding"],
    queryFn: getTeachers,
    staleTime: 5 * 1000 * 60,
  });
  return (
    <div className=" relative lg:w-[650px] sm:w-[70%] hidden md:block   ">
      <motion.img
        src={woman}
        className="absolute z-50 lg:h-full sm:bottom-0 lg:left-6 xl:w-fit   lg:w-[350px] w-[250px] left-8"
        initial={{ opacity: 0.5, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={pattern}
        className="absolute z-10 h-full -left-14"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={shape}
        className="absolute z-20 lg:h-[95%] lg:w-3/4 lg:-left-12 sm:bottom-0 sm:-left-10 w-full"
        initial={{ opacity: 0, x: 100 ,y:100 }}
        animate={{ opacity: 1, x: 0,y:0 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.div className=" flex flex-col gap-4 items-center justify-end p-3 bg-white w-[175px] h-[100px] absolute z-40 xl:top-0 xl:right-50 top-14 -right-3  rounded-lg  shadow-[9px_10px_0_0_rgba(0,0,0,0.2)] "
      initial={{scale:0}}
      animate={{scale:1,}}
      transition={{duration:2,
        delay:1.5
      }}
      >
        {data?.slice(0, 2).map((item) => (
          <Link
            to={`/coachesDetail/${item.teacherId}`}
            key={item.teacherId}
            className="flex gap-2 w-full justify-between items-center "
          >
            <h3 className="text-sm text-right text-black">{item.fullName}</h3>
            <AvatarComponent size={"sm"} src={item.pictureAddress} />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSection;
