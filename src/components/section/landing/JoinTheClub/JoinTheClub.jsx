import React from "react";
import { motion } from "framer-motion";
import { scrollVariant } from "../../../../configs/frameMorion/Scroll";
import pic from "../../../../assets/images/landingPic.svg";
import line from "../../../../assets/images/line.png";
import YellowButton from "../../../ui/button/YellowButton";
import Tag from "../../../ui/Tag/Tag";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const JoinTheClub = () => {
  const navigate =useNavigate()
  const { t } = useTranslation();
  return (
    <div className="bg-dark-purple w-screen  flex sm:h-[280px] flex-center">
      <div className="md:w-[80%]  w-full  justify-end flex lg:h-[280px] relative items-center gap-4 ">
      <div className="flex md:w-[50%] lg:w-[60%] w-full  items-center justify-between p-5 lg:flex-row flex-col-reverse gap-4">
      <div className="w-[28%] flex  absolute left-0 bottom-0 h-full z-0 ">
          <motion.img
            src={line}
            className="h-full hidden lg:block"
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          />
        </div>
     
        <div className="z-30">
          <YellowButton
            text={t("joinTheClub.joinTheClubButton")}
            width={"200px"}
            height={"35px"}
            icon={<GoArrowLeft size={16}/>}
            onClick={()=>navigate("/determineLevel")}
          />
        </div>
        <motion.div
          className="  flex flex-col justify-center relative items-center gap-4  "
          variants={scrollVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Tag bgColor={"var(--color-light-purple)"} textColor={"var(--color-dark-purple)"} title={t("joinTheClub.joinTheClubTag")} width={"200px"}/>
          <p className="text-[22px] text-white md:w-[400px] w-[350px]  font-semibold">
         {t("joinTheClub.joinTheClubTitle")}
          </p>
          
        </motion.div>
      </div>
        <div className=" lg:w-[30%] w-[60%] lg:h-full h-[280px]  hidden md:block ">
          <div className="relative h-[280px] md:h-full  ">
            <motion.img
              src={pic}
              className=" absolute bottom-0 w-full"
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheClub;
