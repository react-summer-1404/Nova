import { Button } from "@heroui/react";
import { PiMoonLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
   const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  return (
    <div className="flex gap-4 items-center fixed bottom-11 left-10 z-50">
      <Button
        isIconOnly
        aria-label="Like"
        className="w-[48px] h-[48px]  bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out "
        onPress={themeToggle}
      >
        {theme === "light" ? (
          <PiMoonLight className="text-white text-2xl" />
        ) : (
          <PiSunLight className="text-white text-2xl" />
        )}
      </Button>
    </div>
  );
};

export default DarkMode;
