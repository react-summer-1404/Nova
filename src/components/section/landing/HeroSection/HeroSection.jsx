import React, { useEffect } from "react";
import heroPic from "../../../../assets/images/herosectionPic.svg";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft } from "react-icons/go";
import AccentText from "../../../ui/accentText/AccentText";
import { Link } from "react-router";
import ImageSection from "./imageSection/ImageSection";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{ background: "var(--gradient-main)" }}
      className="w-screen flex-center pt-4  overflow-hidden"
    >
      <div
        className="flex justify-between w-4/5  "
      >
        <ImageSection />

        <div 
        className="p-5 flex flex-col gap-6 items-end w-[490px]">
          <AccentText
            beforeLabel={t("herosection.heroPreText")}
            afterLabel={t("herosection.heroTextSuffix")}
          />

          <h3 className="text-responsive text-right pb-[35px] max-w-md text-text-gray">
            {t("herosection.heroSubText")}
          </h3>
          <Link to={"/courses"}>
            <BlueButton
              BtnIcon={<GoArrowLeft />}
              content={t("herosection.heroButton")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
