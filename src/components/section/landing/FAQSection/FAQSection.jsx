import React from "react";
import AccardionComponent from "../../../ui/AccardionComponent/AccardionComponent";
import { motion } from "framer-motion";
const FAQSection = () => {
  return (
    <div
      style={{ backgroundColor: "var(--color-light-gray)" }}
      className="w-screen  h-[500px] lg:h-[750px] flex items-center justify-center border"
    >
      <div className=" md:h-[450px] md:w-2/4 flex flex-col items-center md:items-end text-right gap-2 md:gap-3 md:pr-10">
        <button className="px-4 h-[25px] text-dark-purple bg-light-purple rounded-[30px] text-[9px] ">
          سوالات متداول
        </button>
        <span className="text-navy text-[16px] sm:text-[18px] lg:text-[20px] font-[700] w-[65%] md:w-[32%] leading-6]">
          شروع به تمرین از مربیان حرفه ای جهان
        </span>
        <h2 className="text-dark-gray text-[8px] sm:text-[9px] lg:text-[10px] w-[67%] md:w-[51%] font-[400] text-text2-fot">
          Grooveصندوق ورودی مشترک بصری این کار را برای اعضای تیم آسان میکند
          سازماندهی، اولویت بندی و.در این قسمت.
        </h2>
        <div className="  flex justify-end w-full h-[60%] "> 
        <AccardionComponent />
        </div>
        
      </div>
      <motion.div
        className="hidden md:block w-2/4 h-[450px]"
        initial={{ opacity: 0.5, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="src/assets/images/div.faq__img.png"
          className="h-[450px] ml-[40px] md:ml-[68px]"
        />
      </motion.div>
    </div>
  );
};

export default FAQSection;
