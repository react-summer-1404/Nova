import React from "react";
import { ListboxCustom, UserProfile } from "../../components/ui/index";
import { Outlet } from "react-router-dom";
import userimg from "../../assets/images/userimg.jpg"
import Header from './../../features/auth/componenets/authLayout/Header';

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex-center">
      <div className="flex items-center justify-between w-[92%] h-[96%] container-border">
        <div className="flex flex-col w-[80%] h-full bg-white rounded-l-[15px]">
          <div className="flex-left"><Header /></div>
          <main className="px-8 py-2">
            <Outlet />
          </main>
        </div>
        <div className="flex-col-center gap-14 h-full py-8 bg-dark-purple rounded-r-[15px] ">
          <div className="flex-col-center gap-7">
            <div>
              <UserProfile imageUrl={userimg} userName={"آمینا"} />
            </div>
            <div>
              <ListboxCustom />
            </div>
          </div>
          <div>خروج از حساب</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
