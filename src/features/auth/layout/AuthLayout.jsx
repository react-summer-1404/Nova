import React from "react";
import useBackgroundColor from "../hooks/useBackgroundColor";
import SideComponent from "../componenets/authLayout/SideComponent";
import { Outlet } from "react-router-dom";
import Header from "../componenets/authLayout/Header";
import DarkMode from "../../../components/ui/darkMode/DarkMode";

const AuthLayout = () => {
  useBackgroundColor("var(--color-dark-purple)");
  return (
    <div className="w-screen min-h-screen flex items-center justify-center p-2">
      <div className="w-[85%] h-full flex flex-col md:flex-row rounded-[50px] items-center justify-center bg-white/50 select-none">
        <SideComponent />
        <div
          style={{ background: "var(--color-white)" }}
          className="w-full h-[618px] sm:w-[478px] rounded-[50px] shadow-[10px_8px_0_0_rgba(0,0,0,1)]"
        >
          <div className="block md:hidden">
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
      <div><DarkMode /></div>
    </div>
  );
};

export default AuthLayout;
