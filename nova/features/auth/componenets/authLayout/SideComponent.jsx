import React from "react";
import SideHeader from "./SideHeader";
import SideContent from "./SideContent";


const SideComponent = () => {
  return (
    <div className="w-full   backdrop-blur-2xl flex flex-col section-padding rounded-[40px]">
      <SideHeader />
      <SideContent />
      
    </div>
  );
};

export default SideComponent;
