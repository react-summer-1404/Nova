import React from "react";
import {
  NavigationSection,
  Header,
  SideContent,
  MainContent
} from "./components/index";

const BlogsPage = () => {
  return (
    <div className="flex flex-col gap-32 items-center">
        <NavigationSection />
        <div className="w-[76%] flex justify-between  border border-amber-200"> 
          
          {/* main content */}
          <div className="w-[75%] flex flex-col border border-amber-800">
            <Header />
            <MainContent />
          </div>

          {/* side content */}
          <div className="w-[22%] border border-amber-600">
            <SideContent />
          </div>
        </div>
    </div>
  );
};

export default BlogsPage;
