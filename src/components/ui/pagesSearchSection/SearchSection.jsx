import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchSection = ({ Query, setQuery }) => {
  return (
    <div className="flex rounded-[6px] items-center w-[310px] h-[50px] text-base p-[15px] justify-between bg-light-gray ">
      <BsSearch
        style={{
          fontSize: "18px",
          transform: "scaleX(-1)",
          cursor: "pointer",
        }}
        className=" text-dark-purple"
      />
      <input
        className="text-right focus:outline-none w-[100px] h-[20px] text-text-gray"
        type="text"
        placeholder="جستجو"
        value={Query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchSection;
