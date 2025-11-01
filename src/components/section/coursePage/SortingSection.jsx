import React from "react";
import SortDropdown from "../../ui/sortDropDown/SortDropdown";

const SortingSection = ({ paramsObject, onChangeParams }) => {
  const sortType = [
    { label: "ascending", key:"asc" },
    { label: "Descending", key:"desc" },
  ];

  const sortCol = [
    { key: "cost", label: "cost" },
    { key: "active", label: "active" },
  ];

  return (
    <div className="flex gap-2 items-center" dir="rtl">
      <span
        style={{ color: "var(--color-dark-purple)" }}
        className="hidden lg:block text-responsive whitespace-nowrap"
      >
        مرتب سازی بر اساس :
      </span>

      <SortDropdown
        options={sortType}
        selected={paramsObject.SortType || "asc"}
        onChange={onChangeParams}
        paramKey="SortType"
      />

      <SortDropdown
        options={sortCol}
        selected={paramsObject.SortingCol || "cost"}
        onChange={onChangeParams}
        paramKey="SortingCol"
      />
    </div>
  );
};

export default SortingSection;