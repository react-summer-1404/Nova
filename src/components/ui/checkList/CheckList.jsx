import { CheckboxGroup, Checkbox } from "@heroui/react";

export default function CheckList({ data, labelKey,selected,setSelected,idKey = "id",}) {
  return (
   <div style={{direction:"rtl"}}>
     <CheckboxGroup value={selected} onValueChange={setSelected}>
      
      {data?.map((item) => (
  <Checkbox
    key={`${item[idKey]}-${item[labelKey]}`}
    value={String(item[idKey])}  
  >
    {item[labelKey]}
  </Checkbox>
))}

    </CheckboxGroup>
   </div>
  );
}
