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

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "var(--color-dark-blue)" }}
      className="flex flex-col items-center justify-center w-screen h-[560px]"
    >
      <div className="w-[80%] h-[530px] flex items-center justify-center">
        <div className="w-[22%] h-[250px] flex flex-col items-end">
          <div
            style={{ color: "var(--color-white)" }}
            className="flex flex-col gap-3"
          >
            <p className="font-[600] text-[18px]"> در تماس باشید</p>
            <div
              style={{ color: "var(--color-dark-purple)" }}
              className="border-b-[3px] w-[24px] ml-[63px]"
            ></div>
          </div>
          <div className="text-right flex flex-col gap-3">
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="mt-[7px] font-[500] text-[15px] w-[200px] flex flex-row-reverse"
            >
              هنگامی که یک چاپگر ناشناس گرفت نوع گالی و درهم
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse gap-2 "
            >
              <FaYoutube /> <FaInstagram /> <FaWhatsapp /> <FaTwitter />{" "}
              <FaFacebook />
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse gap-2"
            >
              <div
                style={{ backgroundColor: "var(--color-blue-fot)" }}
                className="w-[110px] h-[35px] flex items-center "
              >
                <FaApple />
                <div className="flex flex-col items-start">
                  <div className="font-[400] text-[7px] ml-[5px]">
                    Download on the
                  </div>
                  <div className="font-[400] text-[9px] ml-[5px]">
                    Apple Store
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundColor: "var(--color-blue-fot)" }}
                className="w-[110px] h-[35px] flex items-center "
              >
                <FaGooglePlay />
                <div className="flex flex-col items-start">
                  <div className="font-[400] text-[7px] ml-[5px]">
                    Get it on
                  </div>
                  <div className="font-[400] text-[9px] ml-[5px]">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[22%] h-[250px] flex flex-col items-end">
          <div
            style={{ color: "var(--color-white)" }}
            className="flex flex-col gap-3"
          >
            <p className="font-[600] text-[18px]"> شرکت ما </p>
            <div
              style={{ color: "var(--color-dark-purple)" }}
              className="border-b-[3px] w-[24px] ml-[30px]"
            ></div>
          </div>
          <div className="text-right flex flex-col gap-3">
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="mt-[7px] font-[500] text-[15px] w-[200px] flex flex-row-reverse"
            >
              با ما تماس بگیرید
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse "
            >
              معلم شوید
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse"
            >
              وبلاگ{" "}
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse "
            >
              مربی
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse "
            >
              مناسبت ها
            </div>
          </div>
        </div>
        <div className="w-[22%] h-[250px] flex flex-col items-end">
          <div
            style={{ color: "var(--color-white)" }}
            className="flex flex-col gap-3"
          >
            <p className="font-[600] text-[18px]">لینک های مفید</p>
            <div
              style={{ color: "var(--color-dark-purple)" }}
              className="border-b-[3px] w-[24px] ml-[63px]"
            ></div>
          </div>
          <div className="text-right flex flex-col gap-3">
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="mt-[7px] font-[500] text-[15px] w-[200px] flex flex-row-reverse"
            >
              ارزش های ما
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse "
            >
              شریک شدن
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse"
            >
              شرکای ما{" "}
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse "
            >
              در Future Learn کار کنید
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse "
            >
              Quizlet Plus
            </div>
          </div>
        </div>
        <div className="w-[22%] h-[250px] flex flex-col items-end">
          <div style={{ color: "var(--color-white)" }}>
            <Logo />
          </div>
          <div className="text-right flex flex-col gap-4">
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="mt-[7px] font-[500] text-[15px] w-[200px] flex flex-row-reverse"
            >
              هنگامی که یک چاپگر ناشناخته گالی از را تایپ کرده و آن را درهم
              می‌زنید تا نمونه‌ای بسازد کتابت دارد.
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse "
            >
              استان مازندران، علیوک، جاده فرح آباد، H3X7+5V3، ایران
            </div>
            <div
              style={{ color: "var(--color-text2-fot)" }}
              className="font-[500] text-[15px] w-[200px] flex flex-row-reverse"
            >
              +98 9999999999
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "var(--color-dark-purple)" }}
        className="w-full h-[25px] flex justify-center pt-[50px]"
      >
        <p
          style={{ color: "var(--color-text-fot)" }}
          className="font-[400] text-[16px] "
        >
          © تمامی حقوق این سایت متعلق به تیم نامبر وان می باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
