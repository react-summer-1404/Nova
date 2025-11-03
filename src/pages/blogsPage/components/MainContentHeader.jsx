import React from "react";
import { CustomAutocomplete, Result, Search } from "./index";
import { CiFilter } from "react-icons/ci";
import SortDropdown from "../../../components/ui/sortDropDown/SortDropdown";

const Header = ({paramItems,handleChange}) => {
  return (
    <div className="w-full flex justify-between">
      <div className="hidden sm:flex">
        <CustomAutocomplete paramItems={paramItems} handleChange={handleChange}/>
      </div>
      <div className="sm:hidden w-full flex items-center justify-center p-0.5 gap-1">
        <Search />
      </div>
      <Result />
    </div>
  );
};

export default Header;
