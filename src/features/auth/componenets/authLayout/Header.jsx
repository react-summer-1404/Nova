import React from "react";
import ThemeToggle from "../../../../components/ThemeToggle";
import { IoHome } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";

const Header = () => {
  return (
    <div className={"flex items-center justify-start p-8 gap-3"}>
      <IoHome
        style={{ color: "var(--color-dark-purple)" }}
        className="cursor-pointer"
      />
      <ThemeToggle />
    </div>
  );
};

export default Header;
