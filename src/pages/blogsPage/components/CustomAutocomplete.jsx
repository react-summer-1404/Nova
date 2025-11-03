import { Autocomplete, AutocompleteItem } from "@heroui/react";

export const sortOption = [
  { key: "popular", label: "محبوب‌ترین" },
  { key: "new", label: "جدیدترین" },
  { key: "cheap", label: "ارزان‌ترین" },
  { key: "expensive", label: "گران‌ترین" },
];

export default function CustomAutocomplete() {
  return (
    <div className="w-[60%] flex items-center gap-0.5">
      <div style={{ direction: "rtl" }} className="h-10 flex justify-between">
        <Autocomplete className="whitespace-nowrap" label="محبوبترین">
          {sortOption.map((option) => (
            <AutocompleteItem className="" key={option.key}>
              {option.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
      <span style={{ color: "var( --color-text-gray)" }} className="whitespace-nowrap">
        :مرتب سازی بر اساس
      </span>
    </div>
  );
}
