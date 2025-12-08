import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { FaLaptopCode, FaServer, FaRobot, FaMobileAlt } from "react-icons/fa";
import useCategoryId from "../../../core/store/GetCategoryId";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import toast from "react-hot-toast";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};
const ChooseCategory = () => {
  const setCategoryId = useCategoryId((state) => state.setCategoryId);
  const [selectedKey, setSelectedKey] = useState(null);

  const text = `
    حوزه‌ای که می‌خوای توش فعالیت کنی رو انتخاب کن.
    این انتخاب کمک می‌کنه مسیر یادگیریت درست و هدفمند شروع بشه.
 `;

  const LETTER_DELAY = 0.025;
  const navigate = useNavigate();
  const options = [
    {
      name: "فرانت‌اند",
      icon: <FaLaptopCode size={20} />,
      id: ["37eb783c-010a-42d7-9d18-859d1cdb3f81", "1", "2"],
    },

    {
      name: "بک‌اند",
      icon: <FaServer size={20} />,
      id: ["37eb783c-010a-42d7-9d18-859d1cdb3f82"],
    },

    {
      name: "هوش مصنوعی",
      icon: <FaRobot size={20} />,
      id: [],
    },

    {
      name: "برنامه‌نویسی موبایل",
      icon: <FaMobileAlt size={20} />,
      id: [],
    },
  ];
  const handleNext = () => {
    if (!selectedKey) {
      toast.error("لطفا یکی از گزینه ها را انتخاب کنید");
      return;
    }

    navigate("/result");
  };
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
          <motion.div
            className="flex flex-col items-start gap-4 w-[50%] "
            variants={container}
            initial="hidden"
            animate="show"
          >
            {options.map((option, i) => {
              const isActive = selectedKey === option.name;

              return (
                <motion.div className="w-full" variants={item}>
                  <Button
                    key={i}
                    variant="faded"
                    startContent={option.icon}
                    onPress={() => {
                      setCategoryId(option.id);
                      setTimeout(() => navigate("/result"), 50);
                    }}
                    className={`w-full h-[50px] transition-all duration-200 
                  ${
                    isActive
                      ? "bg-[#5751e1] text-white"
                      : "bg-[hsl(240,5%,90%)] text-[#5751e1]"
                  }
                `}
                  >
                    {option.name}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <motion.div className="flex-center  gap-4 w-full pt-10"initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1, ease: "easeInOut" }}>
          <Button
            color="primary"
            className="w-[200px]"
            onPress={handleNext}
            startContent={<GoArrowRight size={20} />}
          >
            مرحله بعد
          </Button>
          <Button
            color="primary"
            onPress={() => navigate("/programmingCategory")}
            className="w-[200px]"
            endContent={<GoArrowLeft size={20} />}
          >
            مرحله قبل
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseCategory;
// ایدی تکنولوژِ ها
// next=2
// react=1
// front-end=37eb783c-010a-42d7-9d18-859d1cdb3f81
// back-end=37eb783c-010a-42d7-9d18-859d1cdb3f81
