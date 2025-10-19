import React from "react";
import "../../assets/styles/global.css";
import NavigationSection from "./components/NavigationSection";
import SearchSection from "./components/Result";
import Result from "./components/Search";
import SortingSection from "./components/SortingSection";

const CoursesPage = () => {
  return (

    <div className="flex flex-col gap-8">
      <NavigationSection />
    <div className="w-screen flex flex-col items-center gap-8">
      <div className="flex justify-between  w-4/5 gap-2">

        <div className="flex gap-2 items-center">
          <SortingSection />
        </div>

        <div className="flex-center gap-8">
          <Result />
          <SearchSection />
        </div>

      </div>

      <div>
        <div>

        </div>
        <div></div>
      </div>
      <div>numbers</div>
    </div>
    </div>
    
  );
};

export default CoursesPage;
