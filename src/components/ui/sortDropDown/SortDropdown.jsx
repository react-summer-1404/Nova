import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useState } from "react";
import "../../../assets/styles/variable.css";
export default function SortDropdown({ options }) {
  const [showItem, setShowItem] = useState(options[0]?.key);

  return (
    <Autocomplete
      className="w-[127px] h-[40px]"
      selectedKey={showItem}
      onSelectionChange={setShowItem}
      isClearable={false}
      variant="bordered"
      classNames={{
        selectorButton: "text-[#5751E1] -m-3",
      }}
    >
      {options?.map((option) => (
        <AutocompleteItem key={option.key}>{option.label}</AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
