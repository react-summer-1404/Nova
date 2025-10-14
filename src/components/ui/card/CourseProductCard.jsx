import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Tag from "../Tag/Tag";

const CourseProductCard = ({ product }) => {
  return (
    
    <div
      style={{ backgroundColor: "var(--color-white)" }}
      className="flex flex-col p-5 rounded-[10px] border border-[#B5B5C380] gap-6 "
    >
      <img
        src={product.pic}
        alt={product.title}
        className="w-full rounded-[8px] shadow-[0px_5px_20px_0px_#00000040]"
      />

      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-responsive ">{product.title}</h2>

        <div className="flex items-center justify-between gap-5 md:gap-12">
          <div className="flex items-center">
            <span>{product.star}</span>
            <FaStar color="#F8BC24" />
          </div>

          <div className="flex gap-1 whitespace-nowrap">
            <Tag bgColor={"var(--color-soft-gray)"} title={product.level} />
            <Tag bgColor={"var(--color-soft-gray)"} title={product.field} />
          </div>
        </div>

        <div className="flex justify-between text-[#5F5F66]">
          <div className="flex items-center gap-1.5">
            <span>{product.standard}</span>
            <img src="/public/level 1.svg" className="w-[19px] h-[17px]" />
          </div>

          <div className="flex items-center gap-1.5">
            <span>{product.people}</span>
            <img src="/public/Vector.svg" />
          </div>
        </div>

        <div className="flex justify-between border-b border-b-[#E3E3F0] pb-4">
          <div className="md:flex gap-1 items-center hidden">
            <Tag
              icon={<AiOutlineLike size={"20px"} />}
              bgColor={"var(--color-soft-gray)"}
              title={product.like}
              textColor={"#5F5F66"}
              width={"65px"}
              height={"34px"}
            />
            <Tag
              title={product.dislike}
              icon={<AiOutlineDislike size={"20px"} />}
              bgColor={"var(--color-soft-gray)"}
              textColor={"#5F5F66"}
              width={"65px"}
              height={"34px"}
            />
          </div>
          <div className="flex gap-0.5 items-center">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[61px]">
              {product.teacher}
            </div>
            <img src="/public/coch 1.svg" className="w-[18px] h-[16px]" />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <span
          style={{ color: "var(--color-dark-purple)" }}
          className="font-bold text-xl"
        >
          {`هزار${product.price}`}
        </span>
        <div className="flex items-center">
          <div>{product.date}</div>
          <MdOutlineDateRange />
        </div>
      </div>
    </div>
  );
};

export default CourseProductCard;
