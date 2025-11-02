import React from "react";
import star from "../../../assets/icons/star.svg";
const OurServicesSection = ({
  title,
  description,
  bgColor,
  shadow,
  circleBg,
  icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        boxShadow: `8px 8px 0px 0px ${shadow}`,
      }}
      className="max-w-[370px] h-[226px]  rounded-[20px]  flex-center  p-[50px] relative"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4 " dir="rtl">
          <div
            style={{ backgroundColor: circleBg }}
            className="rounded-full  w-[70px] h-[70px] flex-center"
          >
            <img src={icon} />
          </div>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <h3 className="text-responsive text-right">{description}</h3>
      </div>
      <img src={star} className="absolute top-[22px] left-[29px]" />
    </div>
  );
};

export default OurServicesSection;
