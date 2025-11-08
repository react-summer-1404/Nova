import React from "react";
import { Slider } from "@heroui/react";


export default function PriceRangeSlider({ value, setValue }) {

  return (
    <div className="flex flex-col gap-4 p-4 lg:w-[240px] w-[300px]">
      <Slider
        step={10}
        minValue={0}
        maxValue={2000}
        value={value}
        onChange={setValue}
        size="md"
        color="primary"
        aria-label="price-range"
        className="rtl max-w-[240px]"
        classNames={{
          track: "bg-gray-300",         
          filler: "bg-[#5751E1]",       
          thumb: "bg-[#5751E1] w-5 h-5" 
        }}
      />

      <div
        style={{ color: "var(--color-text-gray)" }}
        className="font-medium text-sm flex flex-col items-end text-right text-responsive"
      >
        <div className="flex gap-2">
          <span style={{ color: "var(--color-pure-blue)" }}>{value[0]}</span>
          <span> : از </span>
        </div>
        <div className="flex gap-2">
          <span>هزارتومن</span>
          <span style={{ color: "var(--color-pure-blue)" }}>{value[1]}</span>
          <span> : تا </span>
        </div>
      </div>
    </div>
  );
}
