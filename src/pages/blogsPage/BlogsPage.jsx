import React from "react";
import {
  NavigationSection,
  Header,
  SideContent,
  BlogsList
} from "./components/index";

const BlogsPage = () => {
  return (
    <div className="flex flex-col gap-32 items-center">
        <NavigationSection />
        <div className="w-[76%] flex justify-between "> 
          
          {/* main content */}
          <div className="w-[75%] flex flex-col border">
            <Header />
            <BlogsList />
          </div>

          {/* side content */}
          <div className="w-[22%] border">
            <SideContent />
          </div>
        </div>
    </div>
  );
};

export default BlogsPage;
