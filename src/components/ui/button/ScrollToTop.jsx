import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Button } from "@heroui/react";
import { getToken } from "../../../hooks/localStorage";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const token =getToken()


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={`flex gap-4 items-center fixed  right-10 z-50 ${token?"bottom-50":"bottom-30"}`}>
      <Button
        style={{ display: visible ? "flex" : "none" }}
        isIconOnly
        aria-label="Like"
        className="w-[48px] h-[48px]  bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out "
        onPress={scrollToTop}
      >
        <FaChevronUp className="text-white" size={20} />
      </Button>
    </div>
  );
};

export default ScrollButton;
