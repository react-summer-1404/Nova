import React, { useEffect, useState } from "react";
import "../../../assets/styles/global.css";
import "../../../assets/styles/nav.css";
import Logo from "../../ui/Logo/Logo";
import NavbarItems from "./components/NavbarItems";
import SearchBox from "./components/SearchBox";
import UserCartFavorites from "./components/UserCartFavorites";
import AccountBtn from "./components/AccountBtn";
import { IoIosMenu } from "react-icons/io";
import { GoX } from "react-icons/go";
import useToggle from "../../../hooks/useToggle";

const Navbar = () => {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex-center w-screen lg:p-5 pb-4 gap-6 ">
      <div className=" relative flex md:flex-wrap md:justify-center md:gap-7 justify-between items-center p-4  lg:gap-16  w-full lg:flex-nowrap">
        <div className="flex-center md:flex-start  items-center lg:gap-8 md:gap-2 flex-wrap-reverse ">
          <AccountBtn isOpen={isOpen} />
          <UserCartFavorites isOpen={isOpen} />
          <IoIosMenu
            fontSize={"40px"}
            color="#5751E1"
            className="md:hidden cursor-pointer"
            onClick={toggle}
          />
          <SearchBox />
        </div>
        {isOpen && (
          <div className="w-full h-[150%] bg-white Rel absolute top-5 left-0 z-10 transition-opacity duration-300 ease-in-out">
            {" "}
            <GoX onClick={toggle} fontSize={"40px"} />
          </div>
        )}
        <div className="flex justify-start  sm:gap-1 md:pb-4 md:gap-6 lg:gap-8">
          <NavbarItems isOpen={isOpen} />
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
