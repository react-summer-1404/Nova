import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
const AskUser = () => {
  const text = `
دوست داری قبل از شروع، یه توضیح ساده درباره‌ی برنامه‌نویسی برات بگم؟ 😄
`;
  const LETTER_DELAY = 0.025;
  const navigate = useNavigate();
  return (
    <motion.div
      className=" w-screen flex-center bg-light-purple h-screen"
      dir="rtl"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
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
        <motion.div className="flex-center  gap-4 w-full "initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, ease: "easeInOut" }}>
          <Button
            color="primary"
            className="w-[200px]"
            onPress={() => navigate("/programmingInformation")}
          >
            اره !
          </Button>
          <Button
            onPress={() => navigate("/programmingCategory")}
            className="w-[200px]"
          >
            نیازی نیست
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AskUser;
