import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";

export default function SortDropdown({ options }) {
  const [selected, setSelected] = useState( options[0].label);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="flex rounded-sm p-2"
          style={{ border: "1px solid var(--color-border-gray)" }}
        >
          <GoChevronDown color="var(--color-dark-purple)" style={{ borderRight: "2px solid var(--color-border-gray)" }} />
          {selected}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="sort-option"
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
