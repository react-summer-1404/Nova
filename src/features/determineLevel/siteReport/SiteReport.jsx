import { Button } from "@heroui/react";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUserFriends,
  FaGlobe,
  FaSearch,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaEllipsisH,
} from "react-icons/fa";

const SiteReport = () => {
  const text = `از چه راهی با نامبر وان آشنا شدی؟
  جوابت  به ما کمک می‌کنه مسیر رشد رو بهتر بشناسیم 🌱`;
  const LETTER_DELAY = 0.025;
  const options = [
    {
      name: "دوستان",
      icon: <FaUserFriends size={20} />,
    },
    {
      name: "شبکه های مجازی",
      icon: <FaGlobe size={20} />,
    },
    {
      name: "جستجوی گوگل",
      icon: <FaSearch size={20} />,
    },
    {
      name: "معرفی مدرس",
      icon: <FaChalkboardTeacher size={20} />,
    },
    {
      name: "رویداد یا وبینار",
      icon: <FaCalendarAlt size={20} />,
    },
    {
      name: "سایر موارد",
      icon: <FaEllipsisH size={20} />,
    },
  ];

  const navigate = useNavigate();
  return (
    <div className=" w-screen flex-center bg-light-purple h-screen" dir="rtl">
      <div className="w-[60%]  ">
        <div className="flex-center ">
          <div className="flex items-center gap-3 p-4 ">
            <div className="flex items-center justify-end ">
              <div className="bg-white p-4 my-6 rounded-lg flex-1 max-w-3xl ">
                <span className="ml-3 ">
                  {text.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: i * LETTER_DELAY,
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </div>
              <div className="w-3 overflow-hidden">
                <div className="h-4 bg-white rotate-45 transform origin-bottom-right rounded-sm"></div>
              </div>
            </div>
            <img
              src="/logo.svg"
              alt="Logo"
              className="filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:w-[50px] sm:w-[50px] w-[35px]"
            ></img>
          </div>
        </div>
        <div className="flex-center flex-col gap-8 ">
          <div className="flex flex-col items-start gap-4 w-[50%]   ">
            {options.map((option, i) => {
              return (
                <Button
                  key={i}
                  variant="faded"
                  startContent={option.icon}
                  onPress={() => navigate("/programmingKnowledge")}
                  className=" text-[#5751e1] w-full h-[50px] bg-[hsl(240,10%,85%)]"
                >
                  {option.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteReport;
