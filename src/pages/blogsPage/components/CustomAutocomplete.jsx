import { Autocomplete, AutocompleteItem } from "@heroui/react";

export const sortOption = [
  { key: "popular", label: "محبوب‌ترین" },
  { key: "new", label: "جدیدترین" },
  { key: "cheap", label: "ارزان‌ترین" },
  { key: "expensive", label: "گران‌ترین" },
];

export default function CustomAutocomplete() {
  return (
    <div className="flex w-[280px] p-0 items-center flex-nowrap md:flex-nowrap gap-4">
      <Autocomplete className="max-w-xs" label="مرتب سازی بر اساس">
        {sortOption.map((option) => (
          <AutocompleteItem key={option.key}>{option.label}</AutocompleteItem>
        ))}
      </Autocomplete>
      <span
        style={{ color: "var( --color-text-gray)" }}
        className="whitespace-nowrap"
      >
        :مرتب سازی بر اساس
      </span>
    </div>
  );
}
