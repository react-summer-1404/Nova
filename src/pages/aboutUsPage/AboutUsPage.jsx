import React, { useRef } from "react";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import JoinTheClub from "../../components/section/landing/JoinTheClub/JoinTheClub";
import GettingStartedSection from "../../components/section/landing/GettingStartedSection/GettingStartedSection";
import AboutMore from "../../components/section/aboutUs/AboutMore";
import Tag from "../../components/ui/Tag/Tag";
import ServicesList from "../../components/section/aboutUs/ServicesList";
import { motion } from "framer-motion";
import { variantPages } from "../../configs/frameMorion/PagesVariants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Comments from "../../components/section/aboutUs/comments";
import pic1 from "../../assets/images/author03.svg";
import pic2 from "../../assets/images/teacher1.png";
import pic3 from "../../assets/images/teacher2.png";
import pic4 from "../../assets/images/teacher3.png";
import pic5 from "../../assets/images/teacher4.png";
import pic6 from "../../assets/images/userimg.jpg";
import PurpleBtn from "../../components/ui/button/BlueButton";

import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
const AboutUsPage = () => {
  const swiperRef = useRef(null);

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

      <motion.div
        className="w-screen flex flex-col items-center justify-center gap-8 lg:p-[120px] p-8 bg-light-gray"
        variants={variantPages}
        initial="hidden"
        animate="visible"
      >
        <Tag
          title={" توصیفات ما"}
          textColor={"#5751E1"}
          bgColor={"#EFEEFE"}
          width={"177px"}
          height={"31px"}
        />
        <h2 className="font-bold lg:text-4xl text-base lg:w-[500px] w-[350px] ">
          آنچه دانش آموزان فکر می کنند و می گویند درباره نامبر وان
        </h2>
        <span
          style={{ color: "var(--color-text-gray)" }}
          className="text-responsive lg:w-[430px] w-[300px]"
        >
          نظرات کاربران ما نشان‌دهنده کیفیت بالای خدمات و محصولات ماست و ما
          همواره به بازخوردهای آنان گوش می‌دهیم تا تجربه بهتری را ارائه دهیم.
        </span>

        <div className=" w-screen  flex-center">
          <div className="flex items-center gap-2 w-[92%] ">
            <div className="hidden md:block">

            <PurpleBtn
              BtnIcon={<GoArrowLeft size={20} />}
              height={"50px"}
              width={"50px"}
              onClick={() => swiperRef.current?.slidePrev()}
            />
            </div>
            <Swiper
              className="w-[93%]"
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              autoplay={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                400: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1500: { slidesPerView: 4 },
              }}
            >
              <SwiperSlide className="!w-auto !h-auto">
                <Comments name={"سارا"} profile={pic2} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto !h-auto">
                <Comments name={"علی"} profile={pic1} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto !h-auto">
                <Comments name={"لیلا"} profile={pic3} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto !h-auto">
                <Comments name={"سارا"} profile={pic4} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto !h-auto">
                <Comments name={"امیر"} profile={pic5} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto !h-auto">
                <Comments name={"فاطی"} profile={pic6} />
              </SwiperSlide>
            </Swiper>
            <div className="hidden md:block">
              <PurpleBtn
                height={"50px"}
                width={"50px"}
                BtnIcon={<GoArrowRight size={20} />}
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUsPage;
