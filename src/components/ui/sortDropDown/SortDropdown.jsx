import Select from "react-select";

export default function SortDropdown({ options, selectedKey, setSelectedKey }) {
  const optionsContent = options.map(option => ({
    value: option.key,
    label: option.label,
  }));

  const selectedOption = optionsContent.find(op => op.value === selectedKey);
if (!selectedKey) {
  setSelectedKey(optionsContent[0].value);
}
  return (
    <Select
      options={optionsContent}
      value={selectedOption || null}
      onChange={(option) => setSelectedKey(option.value)}
    />
  );
}