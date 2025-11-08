import React from "react";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/react";
import UserInfoBox from "./UserInfoBox";
import { CiUser } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { getCurrentUserProfile } from "./../../../../servises/api/userPanel/getProfileInfo/index";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useNavigate } from "react-router-dom";

const CurrentUserInformation = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["usercurrentinfo"],
    queryFn:getCurrentUserProfile,
  });
  return (
    <div className="flex-col-center gap-8 h-[450px] radius10 px-11 py-10 bg-light-gray relative">
      <CiUser className="course-info-card-icon absolute right-8 top-[-24px] radius10 " />
      <div className="w-full h-[88%] flex-center">
        <div className="w-[50%] flex-col-right gap-8 px-12">
          <UserInfoBox label={"شماره همراه "} value={data?.phoneNumber} />
          <UserInfoBox label={"تلگرام"} value={data?.telegramLink} />
          <UserInfoBox label={"لینکداین"} value={data?.linkdinProfile} />
          <UserInfoBox label={"آدرس"} value={data?.homeAdderess} />
          <UserInfoBox label={"طول جغرافیایی"} value={"--"} />
          <UserInfoBox label={"عرض جغرافیایی"} value={"--"} />
        </div>
        <Divider orientation="vertical" />
        <div className="w-[50%] flex-col-right gap-8">
          <UserInfoBox label={"نام و نام خانوادگی"} value={data?.fName} />
          <UserInfoBox label={"کد ملی"} value={data?.nationalCode} />
          <UserInfoBox label={"ایمیل"} value={data?.email} />
          <UserInfoBox label={"تاریخ تولد"} value={data?.birthDay} />
          <UserInfoBox label={"جنسیت"} value={data?.gender} />
          <UserInfoBox label={"درباره من"} value={data?.userAbout} />
        </div>
      </div>
      <div className="w-full h-[12%]">
        <Button
          className="w-[128px] h-[40px] rounded-full px-1 py-0.5 text-navy bg-golden-yellow"
          onPress={() => {
            navigate("/dashboard/userinformation/edituserprofile");
          }}
        >
          <span className="text-[16px]">
            <CiEdit />
          </span>
          <span className="text-[15px] font-semibold">ویرایش</span>
        </Button>
      </div>
    </div>
  );
};

export default CurrentUserInformation;
