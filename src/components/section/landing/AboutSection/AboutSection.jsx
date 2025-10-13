import React from "react";
import AboutPic from "../../../../assets/images/aboutUsHome.svg";
import Tag from "../../../ui/Tag/Tag";
import "../../../../assets/styles/variable.css";
import "../../../../assets/styles/global.css";
import BlueButton from "../../../ui/button/BlueButton";
import { GoArrowLeft ,GoChevronLeft} from "react-icons/go";
import AccentText from "../../../ui/accentText/AccentText";
import YellowButton from "../../../ui/button/YellowButton";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const AboutSection = () => {
  const options = [
    "برنامه دوره ای انعطاف پذیر",
    "از هر کجا به کلاس خود دسترسی داشته باشید",
    "بهترین مربیان",
  ];
  return (
    <div className="w-screen flex-center">
      <div className="flex justify-between  w-3/4 md:w-full lg:w-full xl:w-3/4 g-16">
        <div className="  md:w-1/2 justify-end  flex-center">
         <div className="items-center md:items-end flex flex-col  gap-6">
         <Tag
            title={"درباره ما بیشتر بدانید"}
            textColor={"var(--color-dark-purple)"}
            bgColor={"var(--color-light-purple)"}
          />
          <AccentText
            beforeLabel={"هزاران"}
            afterLabel={"برتر اکنون در یک مکان"}
            title={"دوره"}
          />
          <h3
            style={{ color: "var(--color-text-gray)" }}
            className="text-right max-w-md text-responsive"
          >
            صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند
            سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم صحبت
            در مورد پایه پلتفرم وب.
          </h3>
          <div className="items-end flex flex-col gap-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-4">
                <Link className="font-bold text-responsive">{option}</Link>
                <YellowButton icon={<GoChevronLeft className="-m-2.5"/>} />
              </div>
            ))}
          </div>
          <BlueButton
            content={"رایگان ازمایش کنید"}
            BtnIcon={<GoArrowLeft />}
          />
         </div>
        </div>
        <img src={AboutPic} className="hidden md:block w-1/2 " />
      </div>
    </div>
  );
};

export default AboutSection;
// برای قسمتیه که نوشته
//درباره ما بیشتر بدانید
