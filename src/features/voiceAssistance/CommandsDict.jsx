import { Button } from "@heroui/react";
import React from "react";
import { FaMicrophone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useMiceState from "../../core/store/miceState";
import CommandsDict from "./CommandsDict";

const Dictaphone = () => {
  const navigate = useNavigate();
  const { activeMice, setActiveMice } = useMiceState();

  const commands = [
    {
      command: "صفحه اصلی",
      callback: () => navigate("/"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.4,
    },
    {
      command: "دوره ها",
      callback: () => navigate("/courses"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.4,
    },
    {
      command: "وبلاگ",
      callback: () => navigate("/blogs"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.4,
    },
    {
      command: "مربیان",
      callback: () => navigate("/coaches"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.4,
    },
    {
      command: "پروفایل",
      callback: () => navigate("/dashboard/userdashboard"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.4,
    },
    {
      command: "داشبورد",
      callback: () => navigate("/dashboard/userdashboard"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.4,
    },
  ];

  return (
    <>
      {activeMice !== "commands" && (
        <div className="fixed bottom-30 left-10 z-50">
          <Button
            isIconOnly
            className={`w-[48px] h-[48px] cursor-pointer transition-all ease-in-out ${
              activeMice === "commands" ? "bg-green-500" : "bg-dark-purple"
            }`}
            onPress={() => setActiveMice("commands")}
          >
            <FaMicrophone className="text-white" size={20} />
          </Button>
        </div>
      )}

      {activeMice === "commands" && <CommandsDict commands={commands} />}
    </>
  );
};

export default Dictaphone;
