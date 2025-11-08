import React from "react";
import DashboardAutoComplete from "./DashboardAutoComplete";
// import DashboardSearchBox from "./dashboardSearchBox";
import SearchSection from "../../../ui/pagesSearchSection/SearchSection";

const MyCourses = () => {
  return (
    <div className="w-full flex-col-center">
      <div className="w-full justy-between">
        <div><DashboardAutoComplete radius={"full"} /></div>
        <div><SearchSection /></div>
      </div>
      <div></div>
    </div>
  );
};

export default MyCourses;
