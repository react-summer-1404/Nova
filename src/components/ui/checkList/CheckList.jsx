import { CheckboxGroup, Checkbox } from "@heroui/react";

export default function CheckList({
  data,
  labelKey = "label",
  idKey = "id",
  selected,
  onChangeParams
  
}) {
  const handleId = (values) => {
    if (idKey === "TeacherId") {
      onChangeParams(values.map((v) => Number(v)));
    } else {
      onChangeParams(values);
    }
  };

  const normalizedSelected = Array.isArray(selected)
  ? selected
  : typeof selected === "string"
  ? selected.split(",")
  : [];
console.log(selected)
  return (
    <div className="flex flex-col gap-3" style={{ direction: "rtl" }}>
      <CheckboxGroup
        value={normalizedSelected.map(String)}
        onChange={handleId}
        orientation="vertical"
        className="gap-2"
      >
        {data?.map((item) => {
          const itemId = idKey === "TeacherId" ? Number(item[idKey]) : item[idKey];
          return (
            <Checkbox
              key={itemId}
              value={String(itemId)}
              color="primary"
              classNames={{
                label: "text-sm text-foreground-600",
              }}
            >
              {item[labelKey]}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </div>
  );
}
