import React from "react";
import AccardionComponent from "../../../ui/AccardionComponent/AccardionComponent";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const FAQSection = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{ backgroundColor: "var(--color-light-gray)" }}
      className="w-screen h-[350px] sm:h-[500px] lg:h-[750px] flex items-center justify-center"
    >
      <div className=" md:h-[450px] md:w-2/4 flex flex-col items-center md:items-end text-right gap-1 md:gap-3 md:pr-10">
        <button className="px-4 h-[25px] text-dark-purple bg-light-purple rounded-[30px] text-[9px] ">
         {t("fAQSection.fAQSectionTag")}
        </button>
        <span className="text-navy text-[16px] sm:text-[18px] lg:text-[20px] font-[700] w-[65%] md:w-[32%] leading-6]">
         {t("fAQSection.fAQSectionTitle")}
        </span>
        <h2 className="text-dark-gray text-[8px] sm:text-[9px] lg:text-[10px] w-[67%] md:w-[51%] font-[400] text-text2-fot">
         {t("fAQSection.fAQSectionDescribe")}
        </h2>
        <AccardionComponent />
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
