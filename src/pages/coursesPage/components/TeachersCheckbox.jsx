import React from "react";

export default function TeachersCheckbox({ teachers, selectedTeachers, setSelectedTeachers }) {
  const handleChange = (event) => {
    const teacherId = Number(event.target.value);    
    if (event.target.checked) {
      setSelectedTeachers([...selectedTeachers, teacherId]);
    } else {
      setSelectedTeachers(selectedTeachers.filter(id => id !== teacherId));
    }
  };

  return (
    <div className="flex flex-col gap-4" style={{ direction: "rtl" }}>
      {teachers?.map((teacher) => (
        <label key={teacher.teacherId} className="flex items-center gap-3 cursor-pointer">
          <input
  type="checkbox"
  value={teacher.teacherId}      
  checked={selectedTeachers.includes(teacher.teacherId)}
  onChange={handleChange}
  className="w-4 h-4"
/>

          {teacher.fullName}
        </label>
      ))}
    </div>
  );
}
