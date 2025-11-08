import React from "react";
import { CustomAutocomplete, Result, Search } from "../../../pages/blogsPage/components/index";
import { CiFilter } from "react-icons/ci";

const Header = ({paramItems,handleChange,currentItems ,totalCount}) => {
  return (
    <div className="w-full flex justify-between">
      <div className="hidden sm:flex">
        <CustomAutocomplete paramItems={paramItems} handleChange={handleChange}/>
      </div>
      <div className="sm:hidden w-full flex items-center justify-center p-0.5 gap-1">
        <Search />
      </div>
      <Result currentItems={currentItems} totalCount={totalCount}/>
    </div>
  );
};

export default Header;
