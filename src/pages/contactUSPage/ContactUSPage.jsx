import React from "react";
import { Textarea } from "@heroui/input";
import { Input } from "@heroui/react";
import { YellowButton } from "../../components/ui";
import { GoArrowLeft } from "react-icons/go";
import message from "../../assets/icons/SVG (1).svg";
import call from "../../assets/icons/SVG (2).svg";
import loc from "../../assets/icons/SVG (3).svg";
const ContactUsPage = () => {
  return (
    <div className="w-screen flex-center flex-col p-8">
      <div className="flex lg::w-[80%] md:w-[90%]  items-center border justify-between md:flex-row flex-col gap-4">
        <div className="bg-light-gray border border-soft-gray md:w-[60%] w-full items-end flex flex-col  gap-5 p-6 rounded">
          <div className="flex flex-col gap-3 text-right">
            <h2 className="font-bold text-[30px]">برای ما پیام ارسال کنید</h2>
            <h4 className="text-text-gray ">
              آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند
              *
            </h4>
          </div>
          <Textarea
            className="max-w-2xl "
            classNames={{ inputWrapper: "bg-white " }}
          />
          <div className="flex gap-5">
            <Input
              className="bg-white rounded-[12px]"
              label="نشانی ایمیل"
              type="email"
              variant="bordered"
            />
            <Input
              className="bg-white rounded-[12px] "
              label="نام خانوادگی"
              type="text"
              variant="bordered"
            />
            <Input
              className="bg-white rounded-[12px]"
              label="نام"
              type="text"
              variant="bordered"
            />
          </div>
          <YellowButton
            height={"50"}
            width={"160px"}
            text={"ارسال کنید"}
            icon={<GoArrowLeft size={20} />}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex bg-light-gray gap-3 p-6 items-center rounded  justify-end">
            <div className="flex flex-col gap-1 text-right ">
              <h2 className="font-bold text-[20px]">نشانی</h2>
              <span className="text-text-gray">
                آوامیلیگ درایو، کنزینگتون لندن، انگلستان
              </span>
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-dark-purple flex-center ">
              <img src={loc} />
            </div>
          </div>

          <div className="flex bg-light-gray gap-3 p-6  rounded items-center justify-end">
            <div className="flex flex-col gap-1 text-right">
              <h2 className="font-bold text-[20px]">تلفن</h2>
              <span className="text-text-gray">+33 443 524</span>
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-dark-purple flex-center">
              <img src={call} />
            </div>
          </div>

          <div className="flex bg-light-gray gap-3 p-6 rounded items-center justify-end">
            <div className="flex flex-col gap-1 text-right">
              <h2 className="font-bold text-[20px]">ادرس ایمیل</h2>
              <span className="text-text-gray">numberOne@gmail.com</span>
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-dark-purple flex-center">
              <img src={message} />
            </div>
          </div>
        </div>
      </div>
      <div>map</div>
    </div>
  );
};

export default ContactUsPage;
