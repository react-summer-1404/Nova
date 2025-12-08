import { Button, Tooltip } from "@heroui/react";
import React from "react";
import { MdLeaderboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DetermineButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 items-center fixed bottom-22 right-10 z-50">
      <Tooltip content="رفتن به تعیین سطح" placement="left">
        <Button
          isIconOnly
          aria-label="Like"
          className="w-[48px] h-[48px] bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out"
          onPress={() => navigate("determineLevel")}
        >
          <MdLeaderboard className="text-white" size={20} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default DetermineButton;
