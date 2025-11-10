import SortDropdown from "../../ui/sortDropDown/SortDropdown";



export default function CustomAutocomplete({paramItems ,handleChange}) {
  const sortType = [
    { label: "صعودی", key: "asc" },
    { label: "نزولی", key: "desc" },
  ];
  const sortCol = [
    { key: "insertDate", label: "تاریخ بارگزاری" },
    { key: "currentView", label: "بازدید" },
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
      selected={paramItems.SortType ||sortType[0].key}
      onChange={handleChange}
      paramKey="SortType"
    />

    <SortDropdown
      options={sortCol}
      selected={paramItems.SortingCol || sortCol[0].key}
      onChange={handleChange}
      paramKey="SortingCol"
    />
  </div>
  );
}
