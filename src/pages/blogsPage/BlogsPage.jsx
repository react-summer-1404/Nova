import React, { useState } from "react";
import {
  NavigationSection,
  Header,
  SideContent,
  BlogsList
} from "./components/index";
import CustomPagination from "./components/CustomPagination";

const BlogsPage = () => {

  const[pageNumber,setPageNumber] = useState(1)
  const[rowsOfthePage, setRowsOfthePage] = useState(10)
  const[sortingCol, setSortingCol] = useState("InsertDate")
  const[sortType, setSortType] = useState("InsertDate")

  return (
    <div className="flex flex-col gap-28 items-center">
        <NavigationSection />
        <div className="w-[80%] flex justify-between gap-6"> 
          
          {/* main content */}
          <div className="w-[75%] flex flex-col items-center pb-16">
            <Header />
            <BlogsList pageNumber={pageNumber} rowsOfthePage={rowsOfthePage} sortingCol={sortingCol} sortType={sortType} />
            <CustomPagination pageNumber={pageNumber} setPageNumber={setPageNumber} total={10}/>
          </div>

          {/* side content */}
          <div className="w-[24%]">
            <SideContent />
          </div>
        </div>
    </div>
  );
};

export default BlogsPage;
