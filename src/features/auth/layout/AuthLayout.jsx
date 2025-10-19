import React from "react";
import useBackgroundColor from "../hooks/useBackgroundColor";
import SideComponent from "../componenets/authLayout/SideComponent";
import { Outlet } from "react-router-dom";
import Header from "../componenets/authLayout/Header";

const AuthLayout = () => {
  useBackgroundColor("var(--color-light-blue)");
  return (
    <div className="w-full flex flex-col md:flex-row rounded-[50px] bg-white/50 select-none">
      <SideComponent />
      <div
        style={{ background: "var(--color-white)" }}
        className="w-full sm:w-[478px] rounded-[50px] shadow-[10px_8px_0_0_rgba(0,0,0,1)]"
      >
        <div className="block md:hidden">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
