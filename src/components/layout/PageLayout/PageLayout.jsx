import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import DarkMode from "../../ui/darkMode/DarkMode";

const PageLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div><DarkMode /></div>
      <main className="mt-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
