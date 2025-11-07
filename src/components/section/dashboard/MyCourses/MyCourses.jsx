import React from "react";
import SearchBox from "../../../layout/navbar/components/SearchBox";
import DashboardAutoComplete from "./DashboardAutoComplete";

const MyCourses = () => {
  return (
    <div className="w-full flex-col-right relative">
      
      <div className="w-full flex relative">
        <DashboardAutoComplete radius={"full"}/>
        <div className="absolute bottom-20 right-0">
          <SearchBox />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyCourses;
