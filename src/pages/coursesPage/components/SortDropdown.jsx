import Select, { components } from "react-select";

export default function SortDropdown({ options, selectedKey, setSelectedKey }) {
  

  const selectedOption = options.find((op)=>op.key===selectedKey)

  return (
    <div>
      <div >
        <Select
            options={options.map(option => ({ value: option.key, label: option.label }))}
          value={selectedOption ? { value: selectedOption.key, label: selectedOption.label } : null}
          onChange={(option) => setSelectedKey(option.value)}
          
        />
      </div>
    </div>
  );
}
