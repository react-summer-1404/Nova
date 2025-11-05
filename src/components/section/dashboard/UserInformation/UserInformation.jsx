import React from "react";
import { Divider } from "@heroui/divider";

import { CiUser } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { Button } from "@heroui/react";
import UserInfoBox from "./UserInfoBox";

const UserInformation = () => {
  return (
    <div className="flex-col-center gap-8 h-[450px] radius10 px-11 py-10 bg-light-gray relative">
      <CiUser className="course-info-card-icon absolute right-8 top-[-24px] radius10 " />
      <div className="w-full h-[88%] flex-center">
        <div className="w-[50%] flex-col-right gap-8 px-12">
          <UserInfoBox label={"شماره همراه "} value={"--"} />
          <UserInfoBox label={"تلگرام"} value={"--"} />
          <UserInfoBox label={"لینکداین"} value={"--"} />
          <UserInfoBox label={"آدرس"} value={"--"} />
          <UserInfoBox label={"طول جغرافیایی"} value={"--"} />
          <UserInfoBox label={"عرض جغرافیایی"} value={"--"} />
        </div>
        <Divider orientation="vertical" />
        <div className="w-[50%] flex-col-right gap-8">
          <UserInfoBox label={"نام و نام خانوادگی"} value={"--"} />
          <UserInfoBox label={"کد ملی"} value={"--"} />
          <UserInfoBox label={"ایمیل"} value={"--"} />
          <UserInfoBox label={"تاریخ تولد"} value={"--"} />
          <UserInfoBox label={"جنسیت"} value={"--"} />
          <UserInfoBox label={"درباره من"} value={"--"} />
        </div>
      </div>
      <div className="w-full h-[12%]">
        <Button className="w-[128px] h-[40px] rounded-full px-1 py-0.5 text-navy bg-golden-yellow">
          <span className="text-[16px]">
            <CiEdit />
          </span>
          <span className="text-[15px] font-semibold">ویرایش</span>
        </Button>
      </div>
    </div>
  );
};

export default UserInformation;

{
  /* <Button>ویرایش</Button> */
}

{
  /* <div className="w-[50%]"></div>
        <Divider orientation="vertical" />
        <div className="w-[50%]"></div> */
}
