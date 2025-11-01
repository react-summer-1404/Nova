import React from "react";
import Header from "./Header";
import SideContent from "./SideContent";


const SideComponent = () => {
  return (
    <div className="hidden md:flex w-[60%] flex-col rounded-[40px]">
      <Header />
      <SideContent />
    </div>
  );
};

export default SideComponent;
