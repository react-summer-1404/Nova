import React from "react";
import JoinTheClub from "../../components/section/landing/JoinTheClub/JoinTheClub";
import Navbar from "../../components/layout/navbar/Navbar";
import HeroSection from "../../components/section/landing/HeroSection/HeroSection";
import TopCategories from "../../components/section/landing/TopCategories/TopCategories";
import AboutSection from "../../components/section/landing/AboutSection/AboutSection";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopCategories />
      <AboutSection/>
      {/* <JoinTheClub /> */}
      
    </div>
  );
};

export default LandingPage;
