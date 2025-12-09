import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function DashboardAutoComplete({selected,setSelected,options,variant="bordered",inputWrapper}) {
  const selectedOptionIcon = options.find((op)=>op.key===selected)
  const { t } = useTranslation();
  return (

    <div style={{ direction: "rtl" }}>
     <Autocomplete
     allowsCustomValue
        aria-label="مرتب‌سازی"
        className="w-[127px] h-[40px]"
        selectedKey={selected}
        onSelectionChange={setSelected}
        isClearable={false}
        variant={variant}
        startContent={selectedOptionIcon?.icon}
        classNames={{
          selectorButton: "text-[#5751E1] -m-3",
          
        }}
        inputProps={{
          classNames: {
            input:" text-center",
            inputWrapper: inputWrapper,
          },
        }}
        placeholder={t("search.landingAutoCompleterPlaceHolder")}
        
      >
      
        {options.map((option) => (
          <AutocompleteItem key={option.key} endContent={option.icon}>{option.label}</AutocompleteItem>
        ))}
      </Autocomplete>
     </div>
  );
}
