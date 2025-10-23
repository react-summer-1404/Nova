import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchSection = () => {

  return (
    <div
    style={{ background: "var(--color-bg-light)" }}
    className="flex rounded-[6px] items-center w-[310px] h-[50px] text-base p-[15px] justify-between"
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
      className="text-right focus:outline-none w-[245px] h-[20px]"
      type="text"
      placeholder="جستجو"
    />
  </div>
  )
}

export default SearchSection
