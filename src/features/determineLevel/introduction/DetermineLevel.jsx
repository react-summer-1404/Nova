import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const DetermineLevel = () => {
  const text = `سلام! ما تیم نامبر وان هستیم 🚀
    خیلی خوش اومدی به بخش تعیین سطح برنامه‌نویسی.
    اینجا فقط با چند تا سؤال کوتاه، می‌فهمیم سطح فعلی‌ت چیه تا بهترین مسیر یادگیری رو مخصوص خودت پیشنهاد بدیم.
    این مرحله خیلی سریع و آسونه، ولی کمک بزرگی می‌کنه که دقیقاً بدونی از کجا باید شروع کنی.
   آماده‌ای شروع کنیم؟`;

  const LETTER_DELAY = 0.025;
const navigate = useNavigate()
  return (
    <div className=" w-screen flex-center bg-light-purple h-screen">
      <div className="w-[60%]   ">
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
            ></img>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full ">
          <Button color="primary" className="w-1/2" onPress={()=>navigate("/howDidYouFindUs")} >! بزن بریم</Button>
          <Button onPress={()=>navigate("/")} color="info" className="w-[300px]" >برگشت به صفحه اصلی</Button>
        </div>
      </div>
    </div>
  );
};

export default DetermineLevel;
