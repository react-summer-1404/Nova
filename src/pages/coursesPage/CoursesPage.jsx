import React from "react";
import "../../assets/styles/global.css";
import NavigationSection from "./components/NavigationSection";
import SearchSection from "./components/Result";
import Result from "./components/Search";

const CoursesPage = () => {
  return (
    <div>
      <NavigationSection />
      <div className="flex justify-between">
        <div className="flex-center gap-4">
        <SearchSection/>
        <Result/>
        </div>
        <span style={{ color: "var(--color-dark-purple)" }}>: مرتب سازی بر اساس</span>


      </div>

        <div>main section</div>
        <div>numbers</div>
    </div>
  );
};

export default CoursesPage;
