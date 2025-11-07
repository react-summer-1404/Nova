import React from "react";
import OurServicesSection from "../../../components/section/aboutUs/OurServicesSection";
import icon from "../../../assets/icons/icon.svg";
import coursesIcon from "../../../assets/icons/courses.svg";
import CertificateIcon from "../../../assets/icons/Certificate.svg";
import { Link } from "react-router-dom";
const ServicesList = () => {
  return (
    <div className="flex gap-8 flex-col xl:flex-row  xl:flex-nowrap lg:flex-wrap lg:flex-row lg:justify-center">
      <Link to="/coaches">
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
      </Link>
      <Link to={"/courses"}>
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
      </Link>
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
  );
};

export default ServicesList;
