import React from "react";
import SortDropdown from "../../ui/sortDropDown/SortDropdown";

const SortingSection = ({ paramsObject, onChangeParams }) => {
  const sortType = [
    { label: "صعودی", key:"asc" },
    { label: "نزولی", key:"desc" },
  ];

  const sortCol = [
    { key: "cost", label: "قیمت" },
    { key: "active", label: "فعال" },
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
        selected={paramsObject.SortType || sortType[0].key}
        onChange={onChangeParams}
        paramKey="SortType"
      />

      <SortDropdown
        options={sortCol}
        selected={paramsObject.SortingCol || sortCol[0].key}
        onChange={onChangeParams}
        paramKey="SortingCol"
      />
    </div>
  );
};

export default SortingSection;