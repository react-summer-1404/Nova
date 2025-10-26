import { CheckboxGroup, Checkbox } from "@heroui/react";

export default function CheckList({
  data,
  labelKey = "label",
  idKey = "id",
  selected,
  setSelected,
}) {
  const handleChange = (values) => {
    if (idKey === "teacherId") {
      setSelected(values.map((v) => Number(v)));
    } else {
      setSelected(values);
    }
  };

  return (
    <div className="flex flex-col gap-3" style={{ direction: "rtl" }}>
      <CheckboxGroup
        value={selected.map((v) => String(v))}
        onChange={handleChange}
        orientation="vertical"
        className="gap-2"
      >
        {data?.map((item) => {
          const itemId = idKey === "teacherId" ? Number(item[idKey]) : item[idKey];
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
