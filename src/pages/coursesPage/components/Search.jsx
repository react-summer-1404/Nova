import React from 'react'
import { BsSearch } from "react-icons/bs";

const Result = () => {
  return (
    <div
    style={{ background: "var(--color-bg-light)" }}
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
      className="text-right focus:outline-none "
      type="text"
      placeholder="جستجو"
    />
  </div>
  )
}

export default Result
