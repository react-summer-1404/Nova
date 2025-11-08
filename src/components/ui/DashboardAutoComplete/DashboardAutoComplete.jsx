import { Autocomplete, AutocompleteItem } from "@heroui/react";

export default function DashboardAutoComplete({selected,setSelected,options}) {

  return (
    <div style={{ direction: "rtl" }}>
      <Autocomplete
        aria-label="مرتب‌سازی"
        className="w-[127px] h-[40px]"
        selectedKey={selected}
        onSelectionChange={setSelected}
        isClearable={false}
        variant="bordered"
        classNames={{
          selectorButton: "text-[#5751E1] -m-3",
        }}
        placeholder="انتخاب کنید..."
      >
        {options.map((option) => (
          <AutocompleteItem key={option.key}>{option.label}</AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
