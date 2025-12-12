import React from "react";
// import ThemeToggle from "../../../../components/ThemeToggle";
import { IoHome } from "react-icons/io5";
import DrawerComponent from "../../../../components/ui/Drawer/DrawerComponent";
import SideBar from "../../../../components/section/dashboard/UserInformation/sideBar";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";

const Header = ({ data }) => {
  
  return (
    <div className={"flex justify-between  w-full items-center"}>
      <div className="flex items-center justify-between p-8 gap-3">
        <Link to={"/"}>
          <IoHome className="cursor-pointer text-dark-purple" size={30} />
        </Link>

        
      </div>

      <div className="lg:hidden ">
        <DrawerComponent
          buttonStyle={"bg-transparent"}
          Icon={<MdMenu size={30} className="text-dark-purple" />}
          Content={<SideBar data={data} />}
        />
      </div>
    </div>
  );
};

export default Header;
