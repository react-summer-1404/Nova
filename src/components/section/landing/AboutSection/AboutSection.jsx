import React from "react";
import AboutPic from "../../../../assets/images/aboutUsHome.svg";
import Tag from "../../../ui/Tag/Tag";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft } from "react-icons/go";
import AccentText from "../../../ui/accentText/AccentText";
import { Link } from "react-router-dom";
import AboutOption from "./AboutOption";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
 const { t } = useTranslation();
  return (
    <div className="w-screen flex-center pb-20 pt-20 ">
      <div className="flex justify-between  w-3/4 md:w-full lg:w-full xl:w-3/4 g-16 ">
        <div className="  md:w-[500px] justify-end  flex-center ">
          <div className="items-center md:items-end flex flex-col  gap-6">
            <Tag
              title={t("aboutSection.aboutSectionTag")}
              textColor={"var(--color-dark-purple)"}
              bgColor={"var(--color-light-purple)"}
            />
            <AccentText
              afterLabel={t("aboutSection.aboutSectionTitleSuffix")}
              beforeLabel={t("aboutSection.aboutSectionPreTitle")}
            />
            <h3
              className="text-right max-w-md text-responsive text-text-gray"
            >
             {t("aboutSection.aboutSectionDescribe")}
            </h3>
            <AboutOption/>
            <Link to={"/aboutUs"}>
              <BlueButton content={t("aboutSection.aboutSectionButton")} BtnIcon={<GoArrowLeft />} />
            </Link>
          </div>
        </div>
        <motion.img src={AboutPic} className="hidden md:block w-1/2 " 
        
        initial={{ opacity: 0.5, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 1.5 }}/>
      </div>
    </div>
  );
};

export default AboutSection;
