export default function SortDropdown({ options, selectedKey,setSelectedKey }) {
  const optionsContent = options.map(option => ({
    value: option.key,
    label: option.label,
  }));

  const selectedOption = optionsContent.find(op => op.value === selectedKey);

  return (
    <Select
      options={optionsContent}
      value={selectedOption || ""}
      onChange={(option) => setSelectedKey(option)}
    />
  );
}
