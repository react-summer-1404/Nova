import React from "react";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import JoinTheClub from "../../components/section/landing/JoinTheClub/JoinTheClub";
import GettingStartedSection from "../../components/section/landing/GettingStartedSection/GettingStartedSection";
import AboutMore from "../../components/section/aboutUs/AboutMore";
import Tag from "../../components/ui/Tag/Tag";
import ServicesList from "../../components/section/aboutUs/ServicesList";
import { motion } from "framer-motion";
import { variantPages } from "../../configs/frameMorion/PagesVariants";
const AboutUsPage = () => {
  return (
    <>
      <NavigationSection title={"ما کی هستیم"} />
      <AboutMore />
      <motion.div
        className="w-screen flex flex-col items-center justify-center gap-8 lg:p-[120px] p-8 bg-light-gray"
        variants={variantPages}
        initial="hidden"
        animate="visible"
      >
        <Tag
          title={"آنچه ما ارائه می دهیم"}
          textColor={"#5751E1"}
          bgColor={"#EFEEFE"}
          width={"177px"}
          height={"31px"}
        />
        <h2 className="font-bold lg:text-4xl text-base lg:w-[500px] w-[350px] ">
          یادگیری مهارت های جدید در زمان و جایی که تو دوست داری
        </h2>
        <span
          style={{ color: "var(--color-text-gray)" }}
          className="text-responsive lg:w-[430px] w-[300px]"
        >
          سلام! این یک پیام تستی است سلام! این یک پیام تستی است سلام! این یک
          پیام تستی است
        </span>

        <ServicesList />
      </motion.div>
      <JoinTheClub />
      <GettingStartedSection />
      <div></div>
    </>
  );
};

export default AboutUsPage;
