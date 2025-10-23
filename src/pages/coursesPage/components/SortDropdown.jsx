import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

export default function SortDropdown({ options }) {
  const [selected, setSelected] = useState( options[0].label);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="flex rounded-sm  w-[120px] h-[40px] relative items-center"
          style={{ border: "1px solid var(--color-border-gray)" }}
        >
          <GoChevronDown color="var(--color-dark-purple)" style={{ borderRight: "1px solid var(--color-border-gray)" }} className="h-[20px] w-[40px] absolute left-0"/>
          <span className="absolute right-2">{selected}</span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="sort-option"
        className="bg-white"
        onAction={(key) => {
          const selectedOption = options.find((op) => op.key === key);
          if (selectedOption) setSelected(selectedOption.label);
        }}
      >
        {options.map((option) => (
          <DropdownItem key={option.key}>{option.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}



