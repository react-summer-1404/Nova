import React from "react";
import SortDropdown from "../../../components/section/shared/SortDropdown";
import "../../../assets/styles/global.css";

const SortingSection = () => {
  const sortOptions2 = [
    { key: "ascending", label: "صعودی" },
    { key: "Descending", label: "نزولی" },
  ];
  const sortOptions1 = [
    { key: "popular", label: "محبوب‌ترین" },
    { key: "new", label: "جدیدترین" },
    { key: "cheap", label: "ارزان‌ترین" },
    { key: "expensive", label: "گران‌ترین" },
  ];

  return (
    <div className="flex gap-2 items-center">
      <SortDropdown
        options={sortOptions1}
        defaultLabel={sortOptions1[0].label}
      />
      <SortDropdown
        options={sortOptions2}
        defaultLabel={sortOptions2[0].label}
      />
      <span
        style={{ color: "var(--color-dark-purple)" }}
        className="hidden lg:block text-responsive whitespace-nowrap"
      >
        : مرتب سازی بر اساس
      </span>
    </div>
  );
};

export default SortingSection;
