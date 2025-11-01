import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const inputType = visible ? "text" : "password";
  const icon = visible ? IoEyeOutline : IoEyeOffOutline;
  const toggle = () => {
    !setVisible;
  };
  return [inputType, icon, toggle];
};
