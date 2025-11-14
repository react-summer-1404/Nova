import React from "react";
import { Outlet } from "react-router-dom";
import Header from './../../features/auth/componenets/authLayout/Header';
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../servises/api/userPanel/getProfileInfo";
import DarkMode from './../../components/ui/darkMode/DarkMode';
import SideBar from "../../components/section/dashboard/UserInformation/SideBar";

const Dashboard = () => {
  
  const { data } = useQuery({
    queryKey: ["currentProfUsers"],
    queryFn:getCurrentUserProfile,
  });
  return (
    <div className="w-screen h-screen flex-center  ">
      <div className="w-screen container-border flex justify-between ">
        <div className="flex flex-col w-[80%] h-screen bg-white rounded-l-[15px] ">
          <div className="flex-left  w-screen lg:w-full"><Header data={data} /></div>
          <main className="px-8 py-2 w-screen lg:w-full">
            <Outlet />
          </main>
        </div>
       <div className="hidden lg:block ">
       <SideBar data={data}/>
       </div>
      </div>
      <div><DarkMode /></div>
    </div>
  );
};

export default Dashboard;
