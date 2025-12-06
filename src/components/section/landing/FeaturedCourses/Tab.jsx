import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTechs } from "../../../../servises/api/landing/topCategories";

const Tabs = ({pointTab,setPointTab}) => {
  const { data } = useQuery({
    queryKey: ["techs",pointTab],
    queryFn: getTechs,
  });


  return (
    <div className="flex flex-col items-start px-6 text-sm truncate md:text-base" dir="rtl">
      <div className="flex gap-8 relative pb-1 px-10">
        <div
          className="flex flex-col items-center cursor-pointer relative"
          onClick={() => setPointTab("همه دوره‌ها")}
        >
          <span className="text-text-gray">همه دوره‌ها</span>
          {pointTab === "همه دوره‌ها" && (
            <div
              style={{ backgroundColor: "var(--color-dark-purple)" }}
              className="h-[3px] w-full rounded absolute -bottom-0.5 left-0 z-10 duration-300 transition-all"
            ></div>
          )}
        </div>

        {data?.slice(0,4)?.map((tab) => (
          <div
            key={tab.id}
            className="flex flex-col items-center cursor-pointer relative text-text-gray"
            onClick={() => setPointTab(tab.techName)}
          >
            <span>{tab.techName}</span>

            {pointTab === tab.techName && (
              <div
                className="h-[3px] w-full rounded absolute -bottom-0.5 left-0 z-10 duration-300 transition-all bg-dark-purple"
              ></div>
            )}
          </div>
        ))}

        <div
          className="h-[3px] w-full absolute bottom-0 left-0 rounded bg-soft-indigo"
        ></div>
      </div>
    </div>
  );
};

export default Tabs;
