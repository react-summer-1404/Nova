import React from "react";
import LabelAndDate from "./LabelAndDate";

const BlogcardMainContent = ({ img, title, label, date, miniDescribe }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 text-[10px] sm:text-[16px]">
      <img
        src={img}
        alt="blog image"
        className="w-[295px] h-[224px] sm:h-[224px]"
      />
      <h2 className="sm:w-full font-semibold text-responsive"> {title} </h2>

      <LabelAndDate label={label} date={date}/>
      
      <p className="text-responsive"> {miniDescribe} </p>
    </div>
  );
};

export default BlogcardMainContent;
