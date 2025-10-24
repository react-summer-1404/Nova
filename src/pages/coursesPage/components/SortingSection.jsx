import React from "react";
import SortDropdown from "./SortDropdown";
import "../../../assets/styles/global.css";

const SortingSection = ({setOrder, sortOrder }) => {

  const sortOptions2 = [
    { key: "ASC", label: "صعودی" },
    { key: "DESC", label: "نزولی" },
  ];
  
  const sortOptions1 = [
    { key: "cheap", label: "ارزان‌ترین" },
    { key: "expensive", label: "گران‌ترین" },
  ];

  return (
    <div className="flex gap-2 items-center "  dir="rtl">
        <span
        style={{ color: "var(--color-dark-purple)" }}
        className="hidden lg:block text-responsive whitespace-nowrap"
      >
         مرتب سازی بر اساس :
      </span>

      {/* <SortDropdown
  options={sortOptions1}
  selectedKey={}    
  selectedOn={}     
/> */}
<SortDropdown
  options={sortOptions2}
  selectedKey={sortOrder}
  setSelectedKey={setOrder}
/>


    
    </div>
  );
};

export default SortingSection;
