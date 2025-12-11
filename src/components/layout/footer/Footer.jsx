import React from "react";
import Logo from "../../ui/Logo/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-dark-blue flex flex-col items-center justify-center w-screen h-[350px] sm:h-[400px] lg:h-[560px]">
      <div className="w-[80%] md:h-[500px] h-[350px] flex items-center justify-center">
        <div className="w-[22%] h-[250px] flex flex-col items-end gap-1 md:gap-3">
          <div className="text-[#fff] flex flex-col gap-3 items-end">
            <p className="font-[600] text-[9px] sm:text-[14px] lg:text-[20px] ">
              {t("footer.GetinTouch")}
            </p>
            <div className="text-dark-purple border-b-[3px] w-[32%]"></div>
          </div>
          <div className="text-right flex flex-col gap-3 w-[85%]">
            <div className="font-[500] text-[8px] sm:text-[12px] text-[#8c94ac] lg:text-[15px] flex flex-row-reverse">
              {t("footer.unknownprinter")}
            </div>
            <div className="font-[500] text-[15px] text-[#8c94ac] flex flex-row-reverse gap-2 ">
              <FaYoutube /> <FaInstagram /> <FaWhatsapp /> <FaTwitter />{" "}
              <FaFacebook />
            </div>
            <div className="font-[500] text-[15px] text-[#8c94ac] flex flex-row-reverse gap-2">
              <div
                style={{ backgroundColor: "var(--color-blue-fot)" }}
                className="md:w-[48%] h-[31px] flex items-center "
              >
                <FaApple className="md:ml-[3px]" />
                <div className="flex flex-col items-start ml-[7px] w-[80%] text-left">
                  <div className="font-[400] text-[5px] md:text-[7px] ">
                    Download on the
                  </div>
                  <div className="font-[400] text-[5px] md:text-[9px] ">
                    Apple Store
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundColor: "var(--color-blue-fot)" }}
                className="md:w-[48%] h-[31px] flex items-center "
              >
                <FaGooglePlay className="ml-[4px]" />
                <div className="flex flex-col items-start ml-[7px] w-[80%] text-left">
                  <div className="font-[400] text-[5px] md:text-[7px] ">
                    Get it on
                  </div>
                  <div className="font-[400] text-[5px] md:text-[9px]">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[22%] h-[250px] flex flex-col items-end gap-1 md:gap-3">
          <div
            style={{ color: "var(--color-white)" }}
            className="flex flex-col gap-3 items-end"
          >
            <p className="font-[600] text-[9px] sm:text-[14px] lg:text-[20px] text-[#fff]">
             {t("footer.OurCompany")}
            </p>
            <div
              style={{ color: "var(--color-dark-purple)" }}
              className="border-b-[3px] w-[52%]"
            ></div>
          </div>
          <div className="text-right flex flex-col gap-1 md:gap-3 w-[85%]">
            <div className=" font-[500] text-[#8c94ac]  text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse">
             {t("footer.ContactUs")}
            </div>
            <div className="font-[500]  text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse ">
             {t("footer.BecomeaTeacher")}
            </div>
            <div className="font-[500]  text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse">
             {t("footer.Blogs")}
            </div>
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px]  flex flex-row-reverse ">
             {t("footer.Coacher")}
            </div>
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse ">
             {t("footer.Events")}
            </div>
          </div>
        </div>
        <div className="w-[22%] h-[250px] flex flex-col items-end gap-1 md:gap-3">
          <div className="flex flex-col gap-3 items-end text-[#fff]">
            <p className="font-[600] text-[9px] sm:text-[14px] lg:text-[20px] text-[#fff]">
             {t("footer.UsefulLinks")}
            </p>
            <div
              style={{ color: "var(--color-dark-purple)" }}
              className="border-b-[3px] w-[32%]"
            ></div>
          </div>
          <div className="text-right flex flex-col gap-1 md:gap-3 w-[85%]">
            <div className="mt-[7px] font-[500]  text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse text-[#8c94ac]">
             {t("footer.OurValues")}
            </div>
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse ">
              {t("footer.ToJoin")}
            </div>
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse">
             {t("footer.OurPartners")}
            </div>
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse ">
             {t("footer.WorkatFutureLearn")}
            </div>
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse ">
              Quizlet Plus
            </div>
          </div>
        </div>
        <div className="w-[22%] h-[250px] flex flex-col items-end gap-2.5 md:gap-2">
          <div style={{ color: "#fff" }} className="md:mt-[-8px] mt-[-7px]">
            <Logo />
          </div>
          <div className="text-right flex flex-col gap-1 md:gap-3 w-[85%]">
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse">
             {t("footer.unknownprinter")}
            </div>
            <div className="font-[500]  text-[8px] sm:text-[12px] lg:text-[15px] text-[#8c94ac] flex flex-row-reverse ">
             {t("footer.footerAddress")}
            </div>
            <div className="font-[500] text-[#8c94ac] text-[8px] sm:text-[12px] lg:text-[15px] flex flex-row-reverse">
              +98 9999999999
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "var(--color-light-blue)" }}
        className=" w-full h-[60px] flex justify-center items-center"
      >
        <p
          style={{ color: "var(--color-text-fot)" }}
          className="font-[400] text-[12px] sm:text-[14px] lg:text-[16px] "
        >
         {t("footer.copyRight")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
