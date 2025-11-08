import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Button } from "@heroui/react";
import DarkMode from "../../ui/darkMode/DarkMode";

const PageLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div><DarkMode /></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
