import React from "react";
import DashboardAutoComplete from "./DashboardAutoComplete";
import DashboardSearchBox from "./dashboardSearchBox";

const MyCourses = () => {
  return (
    <div className="w-full flex-col-center">
      <div className="w-full justy-between">
        <div><DashboardAutoComplete radius={"full"} /></div>
        <div><DashboardSearchBox placeholder={"... جستجو برای دوره"} /></div>
      </div>
      <div></div>
    </div>
  );
};

export default MyCourses;
