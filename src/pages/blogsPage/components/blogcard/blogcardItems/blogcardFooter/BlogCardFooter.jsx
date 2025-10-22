import React from "react";
import SocialButton from "./SocialButton";
import BlogcardView from "./BlogcardView";
import { AiOutlineLike, AiOutlineDislike} from "react-icons/ai";

const BlogCardFooter = () => {
  return (
    <div className="w-[64%] sm:w-full flex justify-between items-center text-[10px] sm:text-[16px] py-2">
      <div className=" flex justify-between items-center gap-1">
        <SocialButton icon={<AiOutlineLike />} number={"169"} />
        <SocialButton icon={<AiOutlineDislike />} number={"7"} />
      </div>
      <div style={{ color: "var(--color-dark-gray)" }}><BlogcardView viewNumber={"26"}/></div>
    </div>
  );
};

export default BlogCardFooter;
