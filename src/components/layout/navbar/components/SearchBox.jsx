import React from "react";
import { BsSearch } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import "../../../../assets/styles/global.css";
const SearchBox = () => {
  return (
    <div className="flex-center md:border md:border-[#D3D2DF] rounded-full md:gap-1 p-1 xl:w-[400px] md:w-[300px]">
      <div className="flex justify-between  w-full ">
        <div
          style={{ backgroundColor: "var(--color-dark-purple)" }}
          className="rounded-full  xl:w-[44px] xl:h-[44px] md:w-[30px] md:h-[30px] sm:w-[44px] sm:h-[44px] w-8 h-8 flex-center cursor-pointer p-1"
        >
          <BsSearch
            style={{
              color: "var(--color-white)",
            }}
            className="w-4 h-4  lg:w-6 lg:h-6 text-white -scale-x-100"
          />
        </div>
        <input
          type="text"
          placeholder="...جستجوی برای دوره"
          className=" focus:outline-none text-base hidden md:block  text-right xl:w-[150px]  w-full "
        />
      </div>
      <div className="hidden xl:flex gap-2 md:border-l md:border-[#BDBABB]  md:items-center md:p-1">
        <GoChevronDown size={12}  />
        <span className="whitespace-nowrap text-base  font-medium">
          دسته بندی ها
        </span>
        <img src="/src/assets/icons/SVG.svg" className="w-[12px] "/>
      </div>
    </div>
  );
};

export default SearchBox;
