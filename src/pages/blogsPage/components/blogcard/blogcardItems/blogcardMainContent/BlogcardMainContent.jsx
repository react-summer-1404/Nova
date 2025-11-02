import React from "react";
import LabelAndDate from "./LabelAndDate";

const BlogcardMainContent = ({ img, title, label, date, miniDescribe }) => {
  return (
    <div className="flex items-center flex-col gap-4 text-[10px] sm:text-[16px]">
      <img src={img} alt="blog image" className="w-[295px] h-[224px] rounded-[15px] shadow-[0px_5px_20px_0px_#00000040]"/>
      
      <h2 className="w-[250px] overflow-hidden font-semibold text-[18px] whitespace-nowrap"> {title} </h2>

      <LabelAndDate label={label} date={date}/>
      
      <p className="text-responsive"> {miniDescribe} </p>
    </div>
  );
};

export default BlogcardMainContent;
