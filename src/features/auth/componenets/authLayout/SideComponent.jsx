import React from "react";
import Header from "./Header";
import SideContent from "./SideContent";


const SideComponent = () => {
  return (
    <div className="hidden md:block w-[60%] backdrop-blur-2xl flex flex-col section-padding rounded-[40px]">
      <Header />
      <SideContent />
    </div>
  );
};

export default SideComponent;
