import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { scrollVariant } from "../../../../configs/frameMorion/Scroll";
import PurpleBtn from "../../../ui/button/BlueButton";
import { useTranslation } from "react-i18next";

const GettingStartedSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="w-screen  h-full bg-[#282568] pb-15">
      <motion.div
        className="h-[550px] flex justify-center items-center "
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className="md:h-[360px] md:mb-[0px] mb-[120px] h-[300px] w-[77%] flex flex-col items-center gap-3">
          <button className=" p-1.5 px-5 md:px-7 rounded-[30px] font-[500] bg-[#5751E1] text-[12px] md:text-[16px] text-[#FFFFFF] ">
            {t("gettingStartedSection.gettingStartedSectionTag")}
          </button>
          <p className="w-[43%] font-[600] text-[16px] sm:text-[26px] lg:text-[36px] text-[#fff]">
            {t("gettingStartedSection.gettingStartedSectionTitle")}
          </p>
          <h2 className="w-[44%] font-[400] hidden sm:block sm:text-[12px] lg:text-[16px] text-[#ACAACC]">
            {t("gettingStartedSection.gettingStartedSectionSubTitle")}
          </h2>
          <div className="w-full flex flex-row gap-4 md:mt-[30px] mt-[15px]">
            <div className="w-[24%] flex flex-col items-center gap-3">
              <img
                src="src/assets/images/SVG.png"
                className="h-[25%] md:h-[30%] object-cover ml-5"
              />
              <p className="font-[600] text-[11px] sm:text-[15px] lg:text-[20px] text-[#fff]">
                {t("gettingStartedSection.gettingStartedSectionItem4Title")}
              </p>
              <h2 className="font-[400] w-[100%] md:w-[100%] hidden sm:block sm:text-[11px] lg:text-[16px] text-[#ACAACC]">
                {t("gettingStartedSection.gettingStartedSectionItem4Describe")}
              </h2>
            </div>
            <div className="w-[24%] flex flex-col items-center gap-3">
              <img
                src="src/assets/images/SVG (1).png"
                className="h-[25%] md:h-[30%] ml-5 object-cover"
              />
              <p className="font-[600] text-[11px] sm:text-[15px] lg:text-[20px] text-[#fff]">
                {t("gettingStartedSection.gettingStartedSectionItem3Title")}
              </p>
              <h2 className="font-[400] w-[100%] md:w-[93%] hidden sm:block sm:text-[11px] lg:text-[16px] text-[#ACAACC]">
                {t("gettingStartedSection.gettingStartedSectionItem3Describe")}
              </h2>
            </div>
            <div className="w-[24%] flex flex-col items-center gap-3">
              <img
                src="src/assets/images/SVG (2).png"
                className="h-[25%] md:h-[30%] object-cover ml-5"
              />
              <p className="font-[600] text-[11px] sm:text-[15px] lg:text-[20px] text-[#fff]">
                {t("gettingStartedSection.gettingStartedSectionItem2Title")}
              </p>
              <h2 className="font-[400] w-[100%] md:w-[84%] hidden sm:block sm:text-[11px] lg:text-[16px] text-[#ACAACC]">
                {t("gettingStartedSection.gettingStartedSectionItem2Describe")}
              </h2>
            </div>
            <div className="w-[24%] flex flex-col items-center gap-3">
              <img
                src="src/assets/images/SVG (3).png"
                className="h-[25%] md:h-[30%] object-cover ml-5"
              />
              <p className="font-[600] text-[11px] sm:text-[15px] lg:text-[20px] text-[#fff]">
                {t("gettingStartedSection.gettingStartedSectionItem1Title")}
              </p>
              <h2 className="font-[400] w-[100%] md:w-[70%] hidden sm:block sm:text-[11px] lg:text-[16px] text-[#ACAACC]">
                {t("gettingStartedSection.gettingStartedSectionItem1Describe")}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex md:flex-row flex-col-reverse items-center justify-center gap-2 md:gap-6  md:mt-[100px]"
        variants={scrollVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className="flex items-center h-[140px] md:h-[220px] w-[90%] md:w-[39%] border bg-[#FFFFFF] border-[#BDBDBD] rounded-[15px] relative">
          <div className="w-[53%] md:w-[57%] h-[110px] md:h-[170px] text-right flex flex-col gap-1 md:gap-5 items-end">
            <p className="font-[600] text-[18px] md:text-[28px] text-[#161439]">
              {t(
                "gettingStartedSection.gettingStartedSectionBecomeStudentCardTitle"
              )}
            </p>
            <h2 className="font-[400] text-[10px] md:text-[16px] text-[#6D6C80] w-[100%] md:w-[85%]">
              {t(
                "gettingStartedSection.gettingStartedSectionBecomeStudentCardDescribe"
              )}
            </h2>

            <PurpleBtn
              BtnIcon={<FaArrowLeft />}
              height={"35px"}
              content={"درخواست"}
            />
          </div>
          <div className="relative w-1/2 h-[140px] md:h-[220px]">
            <img
              src="src/assets/images/SVG (5).png"
              className="absolute bottom-0 right-0 md:w-[90%] w-[110px]"
            />
            <img
              className="absolute bottom-0 right-5 md:w-[200px] w-[110px]"
              src="src/assets/images/7fe7f1624b741e2591310cbf55fa4c6afcf4b877.png"
            />
          </div>
        </div>

        <div className="items-center justify-between flex h-[140px] md:h-[220px] w-[90%] sm:w-[45%] lg:w-[39%] border bg-[#fff] border-[#BDBDBD] rounded-[15px]  ">
          <div className="w-[53%] md:w-[61%] h-[130px] md:h-[150px] text-right flex flex-col justify-center gap-1 p-1 md:gap-5 items-end ">
            <p className="font-[600] text-[14px] sm:text-[18px] lg:text-[28px] text-[#161439]">
              {t(
                "gettingStartedSection.gettingStartedSectionBecomeTeacherCardTitle"
              )}
            </p>
            <h2 className="font-[400] text-[8px] sm:text-[10px] lg:text-[16px] text-[#6D6C80] w-[100%] md:w-[100%]">
              {t(
                "gettingStartedSection.gettingStartedSectionBecomeTeacherCardDescribe"
              )}
            </h2>
            <PurpleBtn
              BtnIcon={<FaArrowLeft />}
              height={"35px"}
              content={t("gettingStartedSection.gettingStartedSectionButton")}
            />
          </div>
          <div className="relative w-1/2 h-[140px] md:h-[220px] ">
            <img
              src="src/assets/images/SVG (5).png"
              className="absolute bottom-0 right-0 md:w-[90%] w-[110px]"
            />
            <img
              className="absolute bottom-0 right-3 md:w-[170px]  w-[110px]"
              src="src/assets/images/3da9724bd304df2f0f944c30163217afe198a0b6.png"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GettingStartedSection;
