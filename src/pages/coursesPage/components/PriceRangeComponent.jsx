import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css"; 
import "../../../assets/styles/rangeInput.css"
import "../../../assets/styles/global.css"
export default function PriceRangeSlider({value,setValue}) {

  return (
    <div className="flex flex-col gap-4 p-4  w-[240px]" >
      <RangeSlider
        min={0}
        max={2000}
        step={10}
        value={value}
        onInput={setValue}
        className="rangeInput"
      />

      <div style={{color:"var(--color-text-gray)"}} className=" font-medium text-sm  flex flex-col items-end text-responsive text-right" >
        <div className="flex gap-2">
            <span style={{color:"var(--color-pure-blue)"}}>{value[0]}</span>
            <span >: از</span>
        </div>
        <div className="flex gap-2" >
            <span >هزارتومن</span>
            <span style={{color:"var(--color-pure-blue)"}}>{value[1]}</span>
            <span> : تا </span>
        </div>
      </div>
    </div>
  );
}
