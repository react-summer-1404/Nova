import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import DarkMode from "../../ui/darkMode/DarkMode";
import ScrollButton from "../../ui/button/ScrollToTop";
import DetermineButton from "../../ui/button/DetermineButton";

const PageLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div><DarkMode /></div>
      <div><ScrollButton/></div>
      <div><DetermineButton/></div>
      <main className="mt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
