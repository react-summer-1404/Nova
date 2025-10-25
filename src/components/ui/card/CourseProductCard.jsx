import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Tag from "../Tag/Tag";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLike } from "../../../servises/api/Like and Dislike";
import { Link } from "react-router-dom";

const CourseProductCard = ({ product, isCol }) => {
  const queryClient = useQueryClient();
  const likeMutation = useMutation({
    mutationFn: (courseId) => postLike(courseId),
    onSuccess: (product) => {
      console.log("لایک شد", product);
      queryClient.invalidateQueries("courses");
    },
    onError: (error) => {
      console.log("خطا  :", error);
    },
  });

  const courseDate = product.startTime ? product.startTime.slice(0, 10) : "";

  return (
    <div
      style={
        isCol
          ? {
              backgroundColor: "var(--color-white)",
              border: " 1px solid var(--color-border-gray)",
              direction: "rtl",
            }
          : {
              backgroundColor: "var(--color-white)",
              border: " 1px solid var(--color-border-gray)",
            }
      }
      className={`flex  p-5 rounded-[10px]   gap-6 ${
        isCol ? "w-[98%] h-[310px] " : " w-[300px]  h-[500px] flex-col"
      }`}
    >
      <img
        src={product.imageAddress}
        alt={product.title}
        className="w-[300px] h-[190px] rounded-[8px] shadow-[0px_5px_20px_0px_#00000040]"
      />

      <div className={`flex flex-col  w-full `}>
        <div className={`flex flex-col   ${isCol ? "gap-[18px]" : "gap-4 "}`}>
          <Link to={`/courses/courseDetail/${product.id}`}>
            <h2 className="font-semibold text-responsive text-right">
              {product.title}
            </h2>
          </Link>

          <div
            className={`flex items-center  gap-2  whitespace-nowrap ${
              isCol ? "justify-start" : "justify-end"
            }`}
          >
            {product.technologyList && (
              <Tag
                bgColor={"var(--color-soft-gray)"}
                title={product.technologyList}
              />
            )}
            <Tag bgColor={"var(--color-soft-gray)"} title={product.levelName} />
          </div>
          {isCol && (
            <h3 className="text-right text-[#888888] font-semibold text-responsive">
              {product.miniDescribe}
            </h3>
          )}
          <div
            className={`${
              isCol
                ? "flex  justify-evenly w-full border-b border-b-[#E3E3F0] pb-4  "
                : "flex flex-col gap-4"
            }`}
          >
            <div
              className={`flex  text-[#5F5F66]  ${
                isCol ? "justify-start w-1/2 gap-[120px]" : "justify-between"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>{product.levelName}</span>
                <img src="/public/level 1.svg" className="w-[19px] h-[17px]" />
              </div>

              <div className="flex items-center gap-1.5">
                <span>{product.capacity}</span>
                <img src="/public/Vector.svg" />
              </div>
            </div>

            <div
              className={`flex justify-between ${
                isCol ? "w-1/2" : "w-full border-b border-b-[#E3E3F0] pb-4"
              }`}
              style={{ direction: "rtl" }}
            >
              <div className="flex gap-0.5 items-center  ">
              <img src="/public/coch 1.svg" className="w-[18px] h-[16px]" />
                <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[61px] rtl ">
                  {product.teacherName}
                </div>
              </div>

              <div className="md:flex gap-1 items-center hidden">
                <Tag
                  icon={<AiOutlineLike size={"20px"} />}
                  bgColor={"var(--color-soft-gray)"}
                  title={product.likeCount}
                  textColor={"#5F5F66"}
                  width={"65px"}
                  height={"34px"}
                  onClick={() => likeMutation.mutate(product.courseId)}
                />
                <Tag
                  title={product.dissLikeCount}
                  icon={<AiOutlineDislike size={"20px"} />}
                  bgColor={"var(--color-soft-gray)"}
                  textColor={"#5F5F66"}
                  width={"65px"}
                  height={"34px"}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-between  pt-5"
          style={{ direction: "rtl" }}
        >
          <div className="flex items-center">
            <MdOutlineDateRange />
            <div>{courseDate}</div>
          </div>

          <span
            style={{ color: "var(--color-dark-purple)" }}
            className="font-bold text-xl"
          >
            {`${product.cost}هزار تومان`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseProductCard;
