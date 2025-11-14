import React from "react";
import { BsSearch } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
const SearchBox = () => {
  
  return (
    <div className="flex-center border border-[#D3D2DF] rounded-full gap-1 p-1 xl:w-[400px] ">
      <div className="flex justify-between  w-full  ">
        <div
        
          className=" bg-dark-purple rounded-full  lg:w-[44px] lg:h-[44px]  flex-center cursor-pointer p-1"
        >
          <BsSearch
            className="  w-6 h-6 text-white -scale-x-100 "
          />
        </div>
        <input
          type="text"
          placeholder="...جستجوی برای دوره"
          className=" focus:outline-none lg:text-base   text-text-fot text-right xl:w-[150px]  text-sm "
        />
      </div>
      <div className=" flex gap-2 border-l border-[#BDBABB]  items-center ">
        <GoChevronDown size={12}  />
        <span  className="whitespace-nowrap md:text-base text-black font-medium text-sm">
          دسته بندی ها
        </span>
        <img src="/src/assets/icons/SVG.svg" className="w-[10px] "/>
      </div>
    </div>
  );
};

export default SearchBox;
