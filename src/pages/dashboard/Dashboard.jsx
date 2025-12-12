import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../../features/auth/componenets/authLayout/Header";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../servises/api/userPanel/getProfileInfo";
import DarkMode from "./../../components/ui/darkMode/DarkMode";
import SideBar from "../../components/section/dashboard/UserInformation/SideBar";
import Dictaphone from "../../features/voiceAssistance/VoiceAssistance";
import { IoNotifications } from "react-icons/io5";
import { Badge, Button } from "@heroui/react";
import { getNotification } from "../../servises/api/notificationApi";
const Dashboard = () => {
  const { data } = useQuery({
    queryKey: ["currentProfUsers"],
    queryFn: getCurrentUserProfile,
  });
  const { data: notif } = useQuery({
    queryKey: ["getNotification"],
    queryFn: getNotification,
  });
  return (
    <div className="w-screen h-screen flex-center  ">
      <div className="w-screen container-border flex justify-between ">
        <div className="flex flex-col w-[80%] h-screen bg-white rounded-l-[15px]  ">
          <div className="flex-center  lg:w-[95%] w-screen">
            <div className="ml-6">
            <Badge color="warning" content={notif?.length} shape="circle">
              <Button isIconOnly radius="full" variant="light">
                <IoNotifications
                  size={30}
                  className="cursor-pointer text-dark-purple"
                />
              </Button>
            </Badge>
            </div>
            <Header data={data} />

          </div>
          <main className="px-8 py-2 w-screen lg:w-full ">
            <Outlet />
          </main>
        </div>
        <div className="hidden lg:block ">
          <SideBar data={data} />
        </div>
      </div>
      <div>
        <DarkMode />
      </div>
      <div>
        <Dictaphone />
      </div>
    </div>
  );
};

export default Dashboard;
