import React from "react";
import { AutoTypeWriter } from "./AutoTypeWriter";

const AccentText = ({ beforeLabel, afterLabel }) => {
  return (
    <div className="text-right font-bold font-display text-4xl flex flex-col items-end">
      <div className="flex gap-2.5">
        <div className="flex justify-end items-center">
          <span className="w-40 relative ">
            <svg
              width="160"
              height="44"
              viewBox="0 0 214 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_8471)">
                <path
                  d="M209.035 7.31384C142.559 -1.12759 74.6089 -2.26187 5.18466 3.91098C1.86476 4.2569 -0.431732 6.78289 0.0687103 9.54221C2.25877 22.4457 3.66902 34.7109 4.29739 46.338C4.34344 48.7191 6.91217 50.8349 10.0161 51.0601C74.6129 56.7235 137.962 57.5172 200.065 53.4414C203.078 53.2402 205.863 50.9958 206.295 48.4376C208.561 36.3171 211.062 24.3468 213.798 12.5267C214.367 10.049 212.241 7.72411 209.046 7.31384"
                  fill="#FFC224"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_8471">
                  <rect
                    width="213.89"
                    height="56"
                    fill="white"
                    transform="matrix(-1 0 0 1 213.89 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <i className="w-40 absolute text-center mt-[4px] font-bold text-black">
            {" "}
            <AutoTypeWriter />
          </i> 
        </div>
        <h2 className="leading-[60px] text-black ">{beforeLabel}</h2>
      </div>
      <h2 className="max-w-md leading-[60px]  text-black">{afterLabel}</h2>
    </div>
  );
};

export default AccentText;
