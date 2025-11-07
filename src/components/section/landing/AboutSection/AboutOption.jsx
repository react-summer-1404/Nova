import React from "react";
import { GoChevronLeft } from "react-icons/go";
import YellowButton from "../../../ui/button/YellowButton"; 
import { Link } from "react-router-dom";

const AboutOption = () => {
  return (
    <div className="items-end flex flex-col gap-4 pb-4">
      <div className="flex items-center gap-4">
        <Link className="font-bold text-responsive">
          برنامه دوره‌ای انعطاف‌پذیر
        </Link>
        <YellowButton icon={<GoChevronLeft className="-m-2.5" />} />
      </div>

      <div className="flex items-center gap-4">
        <Link className="font-bold text-responsive">
          از هر کجا به کلاس خود دسترسی داشته باشید
        </Link>
        <YellowButton icon={<GoChevronLeft className="-m-2.5" />} />
      </div>

      <div className="flex items-center gap-4">
        <Link className="font-bold text-responsive">
          بهترین مربیان
        </Link>
        <YellowButton icon={<GoChevronLeft className="-m-2.5" />} />
      </div>
    </div>
  );
};

export default AboutOption;
