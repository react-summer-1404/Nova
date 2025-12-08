import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import useLevelStore from "../../../core/store/GetLevelId";
import toast from "react-hot-toast";
import { GoArrowRight } from "react-icons/go";
const ProgrammingKnowledge = () => {
  const navigate = useNavigate();
  const setLevelId = useLevelStore((state) => state.setLevelId);

  const [selectedKey, setSelectedKey] = useState(null);

  const text =
    "وقتشه سطح مهارتت رو انتخاب کنیم و مسیرت رو شروع کنیم. چقدر از برنامه نویسی میدونی ؟";

  const LETTER_DELAY = 0.025;

  const options = [
    { name: "چیزی نمیدونم", key: "3" },
    { name: "یه چیزایی بلدم", key: "2" },
    { name: "بلدم", key: "1" },
  ];

  const handleNext = () => {
    if (!selectedKey) {
      toast.error("لطفا یکی از گزینه ها را انتخاب کنید");
      return;
    }

    if (selectedKey === "3") {
      navigate("/beginner");
    } else {
      navigate("/howDidYouFindUs");
    }
  };

  return (
    <div className="w-screen flex-center bg-light-purple h-screen">
      <div className="w-[60%]">
        <div className="flex-center">
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
                <div className="h-4 bg-white rotate-45 transform origin-top-left rounded-sm"></div>
              </div>
            </div>
            <img
              src="/logo.svg"
              alt="Logo"
              className="filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:w-[50px] sm:w-[50px] w-[35px]"
            />
          </div>
        </div>

        <div className="flex-center flex-col gap-8 ">
          <div className="flex flex-col items-start gap-4 w-[50%] ">
            {options.map((option) => {
              const isActive = selectedKey === option.key;

              return (
                <Button
                  key={option.key}
                  variant="faded"
                  onPress={() => {
                    setSelectedKey(option.key);
                    setLevelId(option.key);
                  }}
                  className={`w-full h-[50px] transition-all font-semibold
                  ${
                    isActive
                      ? "bg-[#5751e1] text-white"
                      : "text-[#5751e1] bg-[hsl(240,5%,90%)]"
                  }
                `}
                >
                  {option.name}
                </Button>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-4 w-full ">
            <Button
              color="primary"
              className="w-1/2"
              onPress={handleNext}
              endContent={<GoArrowRight size={20} />}
            >
              مرحله بعد
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingKnowledge;
