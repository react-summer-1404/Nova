import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchSection = () => {
  return (
    <div
      style={{ background: "var(--color-light-gray)" }}
      className="flex rounded-[6px] p-1 items-center"
    >
      <BsSearch
        style={{
          color: "var(--color-black)",
          fontSize: "18px",
          transform: "scaleX(-1)",
          cursor: "pointer",
        }}
      />
      <input
        className="text-right focus:outline-none w-4/5 "
        type="text"
        placeholder="جستجو"
      />
    </div>
  );
};

export default SearchSection;
