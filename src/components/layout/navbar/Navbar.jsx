import React, { useEffect } from "react";
import "../../../assets/styles/nav.css";
import Logo from "../../ui/Logo/Logo";
import { getToken } from "../../../hooks/localStorage";
import AvatarComponent from "../../ui/Avatar/Avatar";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../servises/api/userPanel/getProfileInfo";
import { useNavigate } from "react-router";
import Responsive from "./components/Responsive";
import UserCartFavorites from "./components/UserCartFavorites";
import SearchBox from "./components/SearchBox";
import NavbarItems from "./components/NavbarItems";

const Navbar = () => {
  const navigate = useNavigate();
  const token = getToken();
  const { data } = useQuery({
    queryKey: ["getAvatar"],
    queryFn: getCurrentUserProfile,
    enabled: !!token,
  });

  return (
    <div className="flex-center w-screen  p-4 gap-6  ">
      <div className=" relative flex  md:gap-2 justify-between items-center p-4   w-full  ">
        <div className="flex-center md:flex-start  items-center xl:gap-6 md:gap-2 ">
          <div className="hidden lg:flex">
            {token ? (
              <AvatarComponent
                src={data?.currentPictureAddress}
                onclick={() => navigate("/dashboard")}
              />
            ) : (
              <AccountBtn onclick={() => navigate("/auth")} />
            )}
          </div>
          <div className="hidden lg:block">
            <UserCartFavorites />
          </div>
          <div className="hidden lg:block">
            <SearchBox />
          </div>
         <div className="lg:hidden">
         <Responsive data={data}/>
         </div>
        </div>
        <div className="flex justify-start items-center sm:gap-1  md:gap-4 lg:gap-6  ">
          <div className="hidden lg:block">
            <NavbarItems />
          </div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
