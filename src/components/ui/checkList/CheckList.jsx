export default function CheckList({ data, labelKey = "label", idKey = "id", selected, setSelected }) {
  const handleChange = (event) => {
    let checkedId = event.target.value;

    if (idKey === "teacherId") {
      checkedId = Number(checkedId);
    }

    if (event.target.checked) {
      setSelected([...selected, checkedId]);
    } else {
      setSelected(selected.filter((id) => id !== checkedId));
    }
  };

  return (
    <div className="flex flex-col gap-4" style={{ direction: "rtl" }}>
      {data?.map((item) => {
        let itemId = item[idKey];
        if (idKey === "teacherId") {
          itemId = Number(itemId);
        }

        return (
          <label key={itemId} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value={itemId}
              className="w-4 h-4"
              checked={selected.includes(itemId)}
              onChange={handleChange}
            />
            {item[labelKey]}
          </label>
        );
      })}
    </div>
  );
}
