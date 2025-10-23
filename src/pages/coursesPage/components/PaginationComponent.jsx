import React from "react";
import "../../../assets/styles/variable.css";
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pages = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center mt-4 p-[56px]">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className=" rounded-full w-[50px] h-[50px] cursor-pointer"
          style={
            currentPage == page
              ? { backgroundColor: "var(--color-dark-purple)" ,color:"var(--color-white)" }
              : { backgroundColor: "var(--color-light-gary)" }
          }
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
