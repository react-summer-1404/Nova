import React, { useEffect } from "react";
import "../../../assets/styles/nav.css";
import Logo from "../../ui/Logo/Logo";
import NavbarItems from "./components/NavbarItems";
import SearchBox from "./components/SearchBox";
import UserCartFavorites from "./components/UserCartFavorites";
import AccountBtn from "./components/AccountBtn";
import { IoIosMenu } from "react-icons/io";
import { GoX } from "react-icons/go";
import useToggle from "../../../hooks/useToggle";
import { getToken } from "../../../hooks/localStorage";
import AvatarComponent from "../../ui/Avatar/Avatar";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../servises/api/userPanel/getProfileInfo";
import { useNavigate } from "react-router";
import DrawerComponent from "../../ui/Drawer/DrawerComponent";

const Navbar = () => {
  const navigate = useNavigate();
  const token = getToken();
 const {data}=useQuery({
  queryKey:["getAvatar"],
  queryFn:getCurrentUserProfile,
  enabled:!!token
 })


  return (
    <div className="flex-center w-screen  p-4 gap-6  ">
      <div className=" relative flex  md:gap-2 justify-between items-center p-4   w-full  ">
        <div className="flex-center md:flex-start  items-center xl:gap-6 md:gap-2 ">
         {token?<AvatarComponent  src={data?.currentPictureAddress} onclick={()=>navigate("/dashboard")} />: <AccountBtn  onclick={()=>navigate("/auth")}/>}
          <UserCartFavorites  />
          <SearchBox />
        </div>
        <div className="flex justify-start items-center sm:gap-1  md:gap-4 lg:gap-6  ">
          <NavbarItems />
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
