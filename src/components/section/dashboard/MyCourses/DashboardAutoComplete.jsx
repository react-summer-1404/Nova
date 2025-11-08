import {Autocomplete, AutocompleteItem} from "@heroui/react";

export const animals = [
  {label: "جدید ترین", key: "جدیدترین", description: "The second most popular pet in the world"},
];

export default function DashboardAutoComplete() {
  return (
    <div style={{direction:"rtl"}} className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete className="w-[184px] h-[40px]" label="انتخاب کنید">
        {animals.map((animal) => (
          <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
