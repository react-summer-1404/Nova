import React from "react";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import JoinTheClub from "../../components/section/landing/JoinTheClub/JoinTheClub";
import GettingStartedSection from "../../components/section/landing/GettingStartedSection/GettingStartedSection";
import "../../assets/styles/variable.css";
import "../../assets/styles/global.css";

import "../../assets/styles/variable.css";
import AboutMore from "../../components/section/aboutUs/AboutMore";
import Tag from "../../components/ui/Tag/Tag";
import OurServicesSection from "../../components/section/aboutUs/OurServicesSection";
import icon from "../../assets/icons/icon.svg";
import coursesIcon from "../../assets/icons/courses.svg";
import CertificateIcon from "../../assets/icons/Certificate.svg";

const AboutUsPage = () => {
  return (
    <>
      <NavigationSection title={"ما کی هستیم"} />
      <AboutMore />
      <div
        style={{ backgroundColor: "var(--color-light-gray)" }}
        className="w-screen flex flex-col items-center justify-center gap-8 lg:p-[120px] p-8"
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
        <div className="flex  gap-8   ">
        <OurServicesSection
          bgColor={"#F1FDFF"}
          shadow={"rgba(201,228,233,1)"}
          circleBg={"#1BCBE3"}
          icon={icon}
          title={"معلمان متخصص"}
          description={
            "معلمان متخصص با دانش و تجربه خود، راهنمایی‌های موثری برای دانش‌آموزان ارائه می‌دهند."
          }
        />
        <OurServicesSection
          bgColor={"#EDEAFF"}
          shadow={"#D9D5F1"}
          circleBg={"#5751E1"}
          icon={coursesIcon}
          title={"دوره های موثر"}
          description={
            "دوره‌های مؤثر، توانمندی‌های یادگیرندگان را به‌طرز چشم‌گیری بهبود می‌بخشند."
          }

        />
        <OurServicesSection
          bgColor={"#FFF7E2"}
          shadow={"#E5DECB"}
          circleBg={"#FFC224"}
          icon={CertificateIcon}
          title={"دریافت گواهینامه"}
          description={
            "دریافت گواهینامه نشان‌دهنده توانایی و تخصص فرد در یک حوزه خاص است."
          }

        />
        </div>
      </div>
      <JoinTheClub />
      <GettingStartedSection />
      <div></div>
    </>
  );
};

export default AboutUsPage;
