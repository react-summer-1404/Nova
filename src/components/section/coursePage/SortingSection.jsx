import React from "react";
import SortDropdown from "../../ui/sortDropDown/SortDropdown";
import "../../../assets/styles/global.css";

const SortingSection = () => {
 const sortType = [
    { label: "Ascending", key: "ASC" },
    { label: "Descending", key: "DESC" },
  ];

  const sortCol = [
    {key: "Cost", label: "cost" },
    { key: "Active", label: "active" },
  ];

  return (
    <div className="flex gap-2 items-center " dir="rtl">
      <span
        style={{ color: "var(--color-dark-purple)" }}
        className="hidden lg:block text-responsive whitespace-nowrap "
      >
        مرتب سازی بر اساس :
      </span>

      <SortDropdown options={sortType} />

      <SortDropdown options={sortCol}/>
    </div>
  );
};

export default SortingSection;
