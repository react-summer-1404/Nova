import React from "react";
import { ListboxCustom, UserProfile } from "../../components/ui/index";
import { Outlet } from "react-router-dom";
import Header from './../../features/auth/componenets/authLayout/Header';
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../servises/api/userPanel/getProfileInfo";
import DrawerComponent from "../../components/ui/Drawer/DrawerComponent";
import SideBar from "../../components/section/dashboard/UserInformation/sideBar";

const Dashboard = () => {
  
  const { data } = useQuery({
    queryKey: ["currentProfUser"],
    queryFn: async () => await getCurrentUserProfile(),
  });
  return (
    <div className="w-screen h-screen flex-center">
      <div className=" justy-between w-[92%] h-[96%] container-border">
        <div className="flex flex-col w-[80%] h-full bg-white rounded-l-[15px]">
          <div className="flex-left"><Header data={data} /></div>
          <main className="px-8 py-2">
            <Outlet />
          </main>
        </div>
       <div className="hidden lg:block">
       <SideBar data={data}/>
       </div>
      
      </div>
    </div>
  );
};

export default Dashboard;
