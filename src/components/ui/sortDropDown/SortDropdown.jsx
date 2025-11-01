import { Autocomplete, AutocompleteItem } from "@heroui/react";

export default function SortDropdown({ 
  options, 
  selected, 
  onChange, 
  paramKey 
}) {
  return (
    <Autocomplete
      className="w-[127px] h-[40px]"
      selectedKey={selected}
      onSelectionChange={(val) => onChange(paramKey, val)}
      isClearable={false}
      variant="bordered"
      classNames={{
        selectorButton: "text-[#5751E1] -m-3",
      }}
    >
      {options.map((option) => (
        <AutocompleteItem key={option.key}>
          {option.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}