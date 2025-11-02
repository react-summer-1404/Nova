import React from "react";
import useBackgroundColor from "../hooks/useBackgroundColor";
import SideComponent from "../componenets/authLayout/SideComponent";
import { Outlet } from "react-router-dom";
import Header from "../componenets/authLayout/Header";

const AuthLayout = () => {
  useBackgroundColor("var(--color-dark-purple)");
  return (
    <div className="w-screen min-h-screen flex items-center justify-center p-2">
      <div className="w-[85%] flex flex-col md:flex-row rounded-[50px] items-center justify-center bg-white/50 select-none">
        <SideComponent />
        <div
          style={{ background: "var(--color-white)" }}
          className="w-full sm:w-[478px] h-[600px] rounded-[50px] shadow-[10px_8px_0_0_rgba(0,0,0,1)]"
        >
          <div className="block md:hidden">
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
