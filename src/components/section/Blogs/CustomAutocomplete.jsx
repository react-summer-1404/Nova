import SortDropdown from "../../ui/sortDropDown/SortDropdown";



export default function CustomAutocomplete({paramItems ,handleChange}) {
  const sortType = [
    { label: "ascending", key: "asc" },
    { label: "Descending", key: "desc" },
  ];
  const sortCol = [
    { key: "InsertDate", label: "InsertDate" },
    { key: "active", label: "active" },
  ];

  return (
    <div className="flex gap-2 items-center" dir="rtl">
    <span
      style={{ color: "var(--color-dark-purple)" }}
      className="hidden lg:block text-responsive whitespace-nowrap"
    >
      مرتب سازی بر اساس :
    </span>

    <SortDropdown
      options={sortType}
      selected={paramItems.SortType || "asc"}
      onChange={handleChange}
      paramKey="SortType"
    />

    <SortDropdown
      options={sortCol}
      selected={paramItems.SortingCol || "active"}
      onChange={handleChange}
      paramKey="SortingCol"
    />
  </div>
  );
}
