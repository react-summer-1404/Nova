import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../servises/api/news/getNews";

const Result = () => {
 
  return (
    <div className="lg:flex gap-2 hidden whitespace-nowrap text-[16px] leading-7 font-normal">
      <span style={{ color: "var(--color-dark-purple)" }}>
        {/* {data?.totalCount} */}
      </span>
      <span>از</span>
      <span style={{ color: "var(--color-dark-purple)" }}>
        {/* {currentItems?.length} */}
      </span>
      <span>نمایش نتیجه</span>
    </div>
  );
};

export default Result;
