import React, { useState } from "react";
import SearchSection from "../../../ui/pagesSearchSection/SearchSection";
import DashboardAutoComplete from "../../../ui/DashboardAutoComplete/DashboardAutoComplete";
const SortingColItems = [
  { key: "desc", label: "نزولی" },
  { key: "asc", label: " صعودی" },
];
const SortTypeItems = [
  { key: "active", label: "فعال" },
  { key: "lastUpdate", label: "اخرین اپدیت" },
];
const MyCourses = () => {
  const [sortColCourse, setSortColCourse] = useState();
  const [sortTypeCourse, setTypeColCourse] = useState();
  return (
    <div className="w-full flex-col-center">
      <div className="w-full justy-between ">
        <div className="flex gap-3">
          <DashboardAutoComplete
            options={SortingColItems}
            selected={sortColCourse}
            setSelected={setSortColCourse}
          />
          <DashboardAutoComplete
            options={SortTypeItems}
            selected={sortTypeCourse}
            setSelected={setTypeColCourse}
          />
        </div>
        <div>
          <SearchSection />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyCourses;
