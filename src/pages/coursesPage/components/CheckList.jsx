import { useState } from "react";

export default function CheckList({ data,labelKey = "label"}) {
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const checkedId = event.target.value;
    if (event.target.checked) {
      setSelected([...selected, checkedId]);
    } else {
      setSelected(selected.filter((id) => id !== checkedId));
    }
  };


  return (
    <div className="flex flex-col gap-4" style={{ direction: "rtl" }}>
      {data?.map((item) => (
        <label
          key={item.id}
          className="flex items-center gap-3 cursor-pointer"
          style={{ color: "var(--color-text-gray)" }}
        >
          <input
            type="checkbox"
            value={item.id}
            className="w-4 h-4"
            checked={selected.includes(item.id)}
            onChange={handleChange}
          />
          {item[labelKey]} 
        </label>
      ))}
    </div>
  );
}
