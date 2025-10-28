import React from "react";
import { Button } from "@heroui/button";

const SocialButton = ({ icon, number }) => {
  return (
    <div className="w-[56px] ">
      <div style={{ background: "var(--color-soft-gray)" }} className="rounded-4xl flex justify-center items-center gap-1 p-0.5">
        <span style={{ color: "var(--color-dark-gray)" }}>{number}</span> 
        {icon}
      </div>
    </div>
  );
};

export default SocialButton;
