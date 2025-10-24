import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { GoChevronDown } from "react-icons/go";

export default function SortDropdown({ options, selectedKey, setSelectedKey }) {
  const selectedLabel =
    options.find((item) => item.key === selectedKey)?.label || options[0].label;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="flex items-center justify-between w-[127px] h-[40px] px-2 rounded-sm"
          style={{ border: "1px solid var(--color-border-gray)" }}
        >
          <span>{selectedLabel}</span>
          <GoChevronDown
            className="h-5 w-5 border-r border-[#B5B5C380] pr-1"
            style={{ color: "var(--color-dark-purple)" }}
          />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="sort-option"
        className="rounded-sm w-[120px] bg-white"
        onAction={(key) => setSelectedKey(key)}    
      >
        {options.map((option) => (
          <DropdownItem key={option.key}>{option.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
