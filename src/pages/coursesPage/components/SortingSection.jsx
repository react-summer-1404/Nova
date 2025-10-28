import React from "react";
import SortDropdown from "../../../components/ui/sortDropDown/SortDropdown";
import "../../../assets/styles/global.css";

const SortingSection = ({SortingCol,SortType,onChangeParams}) => {
  
  const sortOptions2 = [
    { key: "ASC", label: "Ascending" },
    { key: "DESC", label: "Descending" },
  ];

  const sortOptions1 = [
    { key: "Cost", label: "cost" },
    { key: "Active", label: "active" },
  ];

  return (
    <div className="flex gap-2 items-center " dir="rtl">
      <span
        style={{ color: "var(--color-dark-purple)" }}
        className="hidden lg:block text-responsive whitespace-nowrap"
      >
        مرتب سازی بر اساس :
      </span>

      <SortDropdown
        options={sortOptions1}
        selectedKey={SortingCol}
        setSelectedKey={(valCol)=>onChangeParams("SortingCol",valCol)}
      />

      <SortDropdown
        options={sortOptions2}
        selectedKey={SortType}
        setSelectedKey={(valType)=>onChangeParams("SortType",valType)}
      />
    </div>
  );
};

export default SortingSection;
