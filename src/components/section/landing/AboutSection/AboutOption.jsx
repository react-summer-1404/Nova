import React from "react";
import { GoChevronLeft } from "react-icons/go";
import YellowButton from "../../../ui/button/YellowButton"; 
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutOption = () => {
  const { t } = useTranslation();
  return (
    <div className="items-end flex flex-col gap-4 pb-4 text-black">
      <div className="flex items-center gap-4">
        <Link className="font-bold text-responsive">
         {t("aboutSection.aboutSectionOption1")}
        </Link>
        <YellowButton icon={<GoChevronLeft className="-m-2.5" />} />
      </div>

      <div className="flex items-center gap-4">
        <Link className="font-bold text-responsive">
         {t("aboutSection.aboutSectionOption2")}
        </Link>
        <YellowButton icon={<GoChevronLeft className="-m-2.5" />} />
      </div>

      <div className="flex items-center gap-4">
        <Link className="font-bold text-responsive">
         {t("aboutSection.aboutSectionOption3")}
        </Link>
        <YellowButton icon={<GoChevronLeft className="-m-2.5" />} />
      </div>
    </div>
  );
};

export default AboutOption;
