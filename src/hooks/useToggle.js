import { useState } from "react";

const useToggle = (initialValue= false) => {
  const [open, setOpen] = useState(initialValue); 
  const toggle = () => {
    setOpen(prev => !prev);
  };

  return [open, toggle , setOpen ,initialValue];
};

export default useToggle;
