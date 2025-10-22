import React from "react";
import { Button } from "@heroui/button";

const SocialButton = ({ icon, number }) => {
  return (
    <div>
      <Button
        style={{ background: "var(--color-soft-gray)" }}
        className="flex justify-around items-center"
        radius="full"
      >
        <span style={{ color: "var(--color-dark-gray)" }}>{number}</span>
        {icon}
      </Button>
    </div>
  );
};

export default SocialButton;
