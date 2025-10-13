import React, { useState } from "react";

const Tabs = () => {
  const tabs = ["توسعه", "تجارت", "طراحی", "همه دوره ها"];
  const [pointTab, setPointTab] = useState("همه دوره ها");

  return (
    <div className="flex flex-col items-start px-6">
      <div className="flex gap-8 relative pb-1 px-10 ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer relative "
            onClick={() => setPointTab(tab)}
          >
            <span>{tab}</span>

            {pointTab === tab && (
              <div
                style={{ backgroundColor: "var(--color-dark-purple)" }}
                className="h-[3px] w-full rounded absolute -bottom-0.5 left-0 z-10  duration-300 transition-all"
              ></div>
            )}
          </div>
        ))}

        <div
          style={{ backgroundColor: "var(--color-soft-indigo)" }}
          className="h-[3px] w-full absolute bottom-0 left-0 rounded "
        ></div>
      </div>
    </div>
  );
};

export default Tabs;
