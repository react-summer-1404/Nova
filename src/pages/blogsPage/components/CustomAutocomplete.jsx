import { Autocomplete, AutocompleteItem } from "@heroui/react";
import SortDropdown from "../../../components/ui/sortDropDown/SortDropdown";

// export const sortOption = [
//   { key: "popular", label: "محبوب‌ترین" },
//   { key: "new", label: "جدیدترین" },
//   { key: "cheap", label: "ارزان‌ترین" },
//   { key: "expensive", label: "گران‌ترین" },
// ];

export default function CustomAutocomplete({paramItems ,handleChange}) {
  const sortType = [
    { label: "ascending", key: "asc" },
    { label: "Descending", key: "desc" },
  ];
  const sortCol = [
    { key: "InsertDate", label: "InsertDate" },
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
      selected={paramItems.SortType || "asc"}
      onChange={handleChange}
      paramKey="SortType"
    />

    <SortDropdown
      options={sortCol}
      selected={paramItems.SortingCol || "active"}
      onChange={handleChange}
      paramKey="SortingCol"
    />
  </div>
  );
}
