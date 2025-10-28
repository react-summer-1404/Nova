import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchSection = ({ Query,setQuery }) => {

  return (
    <div
      style={{ background: "var(--color-light-gray)" }}
      className="flex rounded-[6px] items-center w-[310px] h-[50px] text-base p-[15px] justify-between "
    >
      <BsSearch
        style={{
          color: "var(--color-dark-purple)",
          fontSize: "18px",
          transform: "scaleX(-1)",
          cursor: "pointer",
        }}
      />
      <input
        className="text-right focus:outline-none w-[100px] h-[20px]"
        type="text"
        placeholder="جستجو"
        value={Query}
        onChange={(e)=>{setQuery(e.target.value)}}      />
    </div>
  );
};

export default SearchSection;
