export default function CheckList({ data, labelKey = "label", selected, setSelected }) {
  const handleChange = (event) => {
    const checkedId = event.target.value;
    if (event.target.checked) {
      setSelected([...selected, checkedId]);
    } else {
      setSelected(selected.filter((id) => id !== checkedId));
    }
  };
console.log(selected)
  return (
    <div className="flex flex-col gap-4" style={{ direction: "rtl" }}>
      {data?.map((item) => (
        <label key={item.id} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            value={item.id}
            className="w-4 h-4"
            checked={selected.includes(String(item.id))}
            onChange={handleChange}
          />
          {item[labelKey]}
        </label>
      ))}
    </div>
  );
}