import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionItem, Button, ButtonGroup } from "@heroui/react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { FaFileAlt, FaYoutube } from "react-icons/fa";
import { Tooltip } from "@heroui/react";
const InfoSection = () => {
  const LETTER_DELAY = 0.025;

  const navigate = useNavigate();

  const lines = [
    "برنامه‌نویسی یعنی نوشتن دستوراتی که کامپیوتر آن‌ها را اجرا می‌کند.",
    "با این دستورات می‌توان رفتار یک سایت، یک اپلیکیشن یا هر نرم‌افزار دیگری را مشخص کرد.",
    "در واقع برنامه‌نویس تصمیم می‌گیرد که سیستم چه کاری انجام دهد و چگونه انجامش دهد.",
    "",
    "برنامه‌نویسی به چند دسته‌ی اصلی تقسیم می‌شود:",
    "",
    "📍Front-end:",
    "بخش ظاهری سایت یا برنامه؛ چیزی که کاربر می‌بیند و با آن تعامل می‌کند.",
    "",
    "📍Back-end :",
    "بخش داخلی و پشت‌صحنه‌ی سیستم؛ شامل مدیریت داده‌ها، منطق برنامه و ارتباط با سرور.",
    "",
    "📍Full-stack:",
    "ترکیب فرانت‌اند و بک‌اند؛ یعنی کار با هر دو بخش.",
    "",
    "📍Mobile Development:",
    "برنامه‌نویسی اپلیکیشن‌های موبایل مثل اندروید و iOS.",
    "",
    "📍Data-AI:",
    "کار با داده‌ها، تحلیل اطلاعات و ساخت مدل‌های هوش مصنوعی.",
    "",
    "هر کدام از این بخش‌ها وظایف و مهارت‌های مخصوص خودشان را دارند و بسته به نیاز پروژه انتخاب می‌شوند.",
  ];
  const options = [
    {
      name: "یوتوب",
      icon: <FaYoutube size={20} color="red" />,
      link: "https://youtu.be/zOjov-2OZ0E?si=-YiQVhOVvbHKe9dA",
    },
    {
      name: "مقاله",
      icon: <FaFileAlt size={20} color="gray" />,
      link: "https://blog.faradars.org/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%DA%86%DB%8C%D8%B3%D8%AA/",
    },
  ];
  return (
    <div className="w-screen flex-center bg-light-purple h-screen">
      <div className="w-[60%]">
        <div className="flex-center">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center justify-end ">
              <div className="bg-white p-2 my-3 rounded-lg flex-1 max-w-3xl  flex flex-col justify-center  ">
                <span className="ml-3 border-b border-gray-300 p-3 ">
                  {lines.map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {line.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: (charIndex + lineIndex * 15) * LETTER_DELAY,
                            duration: 0.2,
                            ease: "easeInOut",
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                      <br />
                    </div>
                  ))}
                </span>
                <div className="flex-center w-full ">
                  <Accordion style={{ width: 300 }}>
                    <AccordionItem
                      className="w-[300px] "
                      style={{ direction: "rtl" }}
                      key="1"
                      title="کسب اطلاعات بیشتر"
                    >
                      <div className=" flex-center gap-3">
                        {options.map((option) => {
                          return (
                            <Tooltip content={option.name} showArrow={true}>
                              <Button
                                variant="bordered"
                                startContent={option.icon}
                                onPress={() =>
                                  window.open(option.link, "_blank")
                                }
                              ></Button>
                            </Tooltip>
                          );
                        })}
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="w-3 overflow-hidden">
                <div className="h-4 bg-white rotate-45 transform origin-top-left rounded-sm"></div>
              </div>
            </div>
            <img
              src="/logo.svg"
              alt="Logo"
              className="filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:w-[50px] sm:w-[50px] w-[35px]"
            />
          </div>
        </div>

        <div className="flex-center flex-col gap-8 ">
          <div className="flex-center items-center gap-4 w-full ">
            <Button
              color="primary"
              className="w-1/4"
              startContent={<GoArrowLeft size={20} />}
              onPress={() => navigate("/programmingKnowledge")}
            >
              مرحله قبل
            </Button>
            <Button
              color="primary"
              className="w-1/4"
              endContent={<GoArrowRight size={20} />}
              onPress={() => navigate("/programmingCategory")}
            >
              مرحله بعد
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
