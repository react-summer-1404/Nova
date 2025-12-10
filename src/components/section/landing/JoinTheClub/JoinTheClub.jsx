import React from "react";
import { motion } from "framer-motion";
import { scrollVariant } from "../../../../configs/frameMorion/Scroll";
import pic from "../../../../assets/images/landingPic.svg";
import line from "../../../../assets/images/line.png";
import YellowButton from "../../../ui/button/YellowButton";
import Tag from "../../../ui/Tag/Tag";
import { GoArrowLeft } from "react-icons/go";
const JoinTheClub = () => {
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
            text={"همین حالا امتحان کنید"}
            width={"200px"}
            height={"35px"}
            icon={<GoArrowLeft size={16}/>}
          />
        </div>
        <motion.div
          className="  flex flex-col justify-center relative items-center gap-4  "
          variants={scrollVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Tag bgColor={"var(--color-light-purple)"} textColor={"var(--color-dark-purple)"} title={" ! تعیین سطح "} width={"200px"}/>
          <p className="text-[22px] text-white md:w-[400px] w-[350px]  font-semibold">
          با تعیین سطح می‌تونی دوره‌های مناسب خودت رو پیدا کنی و قوی‌تر از همیشه شروع کنی
          </p>
          
        </motion.div>
      </div>
        <div className=" lg:w-[30%] w-[60%] lg:h-full h-[280px] overflow-visible hidden md:block ">
          <div className="relative h-[280px] md:h-full  ">
            <img
              src={pic}
              className=" absolute bottom-0 w-full"
            
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheClub;
