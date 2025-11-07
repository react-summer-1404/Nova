import React from "react";
import ThemeToggle from "../../../../components/ThemeToggle";
import { IoHome } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import DrawerComponent from "../../../../components/ui/Drawer/DrawerComponent";
import SideBar from "../../../../components/section/dashboard/UserInformation/sideBar";
import { MdMenu } from "react-icons/md";

const Header = ({data}) => {
  return (
     <div className={"flex justify-between border w-full items-center"}>
    <div className="flex items-center justify-start p-8 gap-3">
    <IoHome
        style={{ color: "var(--color-dark-purple)" }}
        className="cursor-pointer"
      />
      <ThemeToggle />
    </div>

      <div className="lg:hidden">
      <DrawerComponent buttonStyle={"bg-transparent"} Icon={<MdMenu size={22} className="text-dark-purple"/>} Content={<SideBar data={data}/>}/>
      </div>
    </div>
  );
};

export default Header;
