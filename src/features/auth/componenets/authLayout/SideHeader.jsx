import React from "react";
import ThemeToggle from "../../../../components/ThemeToggle"
import { IoHome } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";

const SideHeader = () => {
  return (
    <div className="flex items-center justify-start gap-3 ">
      <IoHome style={{color:"var(--color-light-blue)"}}/>
      <FaUserCog />
      <ThemeToggle />
    </div>
  );
};

export default SideHeader;
