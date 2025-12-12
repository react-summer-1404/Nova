import React from "react";
import { Textarea } from "@heroui/input";
import { Input } from "@heroui/react";
import { YellowButton } from "../../components/ui";
import { GoArrowLeft } from "react-icons/go";
import message from "../../assets/icons/SVG (1).svg";
import call from "../../assets/icons/SVG (2).svg";
import loc from "../../assets/icons/SVG (3).svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import NavigationSection from "../../components/ui/navigation/NavigationSection"


const ContactUsPage = () => {
  const position = [36.598656, 53.064654];
  return (
    <div className="w-screen flex-center flex-col p-8 gap-5">
      <NavigationSection title={"تماس با ما"} />

      <div className="flex lg::w-[80%] md:w-[90%]  items-center  justify-between md:flex-row flex-col gap-4">
        <div className="bg-light-gray flex-center border border-soft-gray md:w-[70%] w-full items-end flex flex-col  gap-5 p-6 rounded">
         <div className="flex flex-col gap-5 items-end">
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
              label="سایت اینترنتی *"
              type="email"
              variant="bordered"
            />
            <Input
              className="bg-white rounded-[12px] "
              label="پست الکترونیک *"
              type="text"
              variant="bordered"
            />
            <Input
              className="bg-white rounded-[12px]"
              label="نام *" 
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
      <div className="lg::w-[80%] md:w-[90%] w-full ">
        {" "}
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={position}>
            <Popup>تهران</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactUsPage;
