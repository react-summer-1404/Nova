import React from "react";
import "../../../assets/styles/global.css";
import "../../../assets/styles/nav.css";
import Logo from "../../ui/Logo/Logo";
import NavbarItems from "./components/NavbarItems";
import SearchBox from "./components/SearchBox";
import UserCartFavorites from "./components/UserCartFavorites";
import AccountBtn from "./components/AccountBtn";

const Navbar = () => {
  return (
    <div className="flex-center w-screen lg:p-5 pb-4 gap-6">
      <div className ="flex md:flex-wrap md:justify-center md:gap-7 justify-between items-center p-4  lg:gap-16  w-full lg:flex-nowrap">
     
        <div className="flex-center md:flex-start  items-center lg:gap-8 md:gap-2 flex-wrap-reverse">
          <AccountBtn />
          <UserCartFavorites />
          <SearchBox />
        </div>

        <div className="flex justify-start  sm:gap-1 md:pb-4 md:gap-6 lg:gap-8">
          <NavbarItems />
          <Logo />
        </div>
      </div>
      </div>
  );
};

export default Navbar;
