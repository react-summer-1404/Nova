import React, { useEffect } from "react";
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
    <div className="flex-center w-screen  p-4 gap-6  ">
      <div className=" relative flex  md:gap-2 justify-between items-center p-4   w-full  ">
        <div className="flex-center md:flex-start  items-center xl:gap-6 md:gap-2 ">
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
        <div className="flex justify-start items-center sm:gap-1  md:gap-4 lg:gap-6  ">
          <NavbarItems isOpen={isOpen} />
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
