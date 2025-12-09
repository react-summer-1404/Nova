import { MdOutlineDateRange } from "react-icons/md";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import Tag from "../Tag/Tag";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useFavorite from "../../../core/store/favoriteStore";
import { MdStar } from "react-icons/md";
import { useRef, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { motion } from "framer-motion";
import compare from "../../../assets/icons/compare.svg"
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;
const CourseProductCard = ({
  product,
  isCol,
  likeMutation,
  disLikeMutation,
  addToFavoriteMutation,
  mutationDeleteLike,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const { addedToFavorite, addFavorite } = useFavorite();
  const isFav = addedToFavorite.includes(product.courseId);
  const [sParams, setSParams] = useSearchParams("");
  const compareList = sParams.getAll("courseId");
  const isCompared = compareList.includes(String(product.courseId));

  const navigate = useNavigate();
  // --- Handle Mutations ---
  const handleDisLike = () => disLikeMutation.mutate(product.courseId);

  const handleAddToFavorite = () => {
    addFavorite(product.courseId);
    addToFavoriteMutation.mutate(product.courseId);
  };
  const handleLikeClick = () => {
    if (product.userIsLiked) {
      if (!product.userLikedId) return;
      mutationDeleteLike.mutate(product.userLikedId?.id);
    } else {
      likeMutation.mutate(product.courseId);
    }
  };
  const handleClickCompare = (key, id) => {
    setSParams((prev) => {
      const prevParams = new URLSearchParams(prev);
      const selected = prevParams.getAll(key);

      if (selected.length < 2) {
        prevParams.append(key, id);

        if (selected.length + 1 == 2) {
          navigate("/compareCourse");
        }
        return prevParams;
      }
    });
  };

  const courseDate = product.startTime ? product.startTime.slice(0, 10) : "";
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        border: "1px solid var(--color-border-gray)",
        direction: "rtl",
      }}
      className={`flex p-5 rounded-[10px] gap-6 bg-white ${
        isCol ? "w-[98%] h-[310px]" : "w-[300px] h-[480px] flex-col"
      }`}
    >
      <div
        className={`${isCol ? "flex flex-col gap-5" : "relative"}`}
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={product.imageAddress || "/default.png"}
          alt={product.title}
          className="w-[300px] h-[190px] rounded-[8px] shadow-[0px_5px_20px_0px_#00000040]"
        />
        <div
          className={`cursor-pointer flex justify-between p-2 ${
            isCol ? "" : "w-full absolute top-0"
          }`}
        >
          <div
            className="w-[36px] h-[36px]  flex flex-center rounded-[6px] bg-white"
            onClick={handleAddToFavorite}
          >
            <FaHeart
              size={"28px"}
              color={isFav ? "red" : "var(--color-disable-heart)"}
            />
          </div>

          <div
            className={`w-[36px] h-[36px] flex flex-center rounded-[6px] cursor-pointer 
    ${isCompared ? "bg-golden-yellow" : "bg-white"}`}
            onClick={() => handleClickCompare("courseId", product.courseId)}
          >
           <img src={compare}/>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className={`flex flex-col ${isCol ? "gap-[18px]" : "gap-4"}`}>
          <Link to={`/courseDetail/${product.courseId}`}>
            <h2 className="font-semibold text-responsive text-right text-text-gray">
              {product.title}
            </h2>
          </Link>

          <div className="flex items-center gap-2 whitespace-nowrap  justify-between ">
            <div className="flex gap-2 ">
              {product.technologyList && (
                <div className="w-[100px] truncate">
                  <Tag
                    bgColor={"var(--color-soft-gray)"}
                    title={product.technologyList}
                  />
                </div>
              )}
              <Tag
                bgColor={"var(--color-soft-gray)"}
                title={product.levelName}
              />
            </div>
            <div className="flex gap-1 ">
              <span className="text-base-gray">
                {String(product.courseRate?.avg)?.slice(0, 4)}
              </span>
              <MdStar className="text-golden-yellow" size={18} />
            </div>
          </div>

          {isCol && (
            <h3 className="text-right text-[#888888] font-semibold text-responsive">
              {product.miniDescribe}
            </h3>
          )}

          <div
            className={`${
              isCol
                ? "flex justify-evenly w-full border-b border-b-[#E3E3F0] pb-4"
                : "flex flex-col gap-4"
            }`}
          >
            <div
              className={`flex text-[#5F5F66] ${
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
              <div className="flex gap-0.5 items-center">
                <img src="/public/coch 1.svg" className="w-[18px] h-[16px]" />
                <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[61px] text-[#5F5F66] rtl">
                  {product.teacherName}
                </div>
              </div>

              <div className="md:flex gap-1 items-center hidden">
                <Tag
                  icon={
                    product.userIsLiked ? (
                      <AiFillLike size={"20px"} className="text-black" />
                    ) : (
                      <AiOutlineLike size={"20px"} />
                    )
                  }
                  bgColor={"var(--color-soft-gray)"}
                  title={product.likeCount}
                  textColor={"#5F5F66"}
                  width={"65px"}
                  height={"34px"}
                  onClick={handleLikeClick}
                />

                <Tag
                  icon={
                    product.currentUserDissLike ? (
                      <AiFillDislike size={"20px"} className="text-gray-500" />
                    ) : (
                      <AiOutlineDislike size={"20px"} />
                    )
                  }
                  title={product.dissLikeCount}
                  bgColor={"var(--color-soft-gray)"}
                  textColor={"#5F5F66"}
                  width={"65px"}
                  height={"34px"}
                  onClick={handleDisLike}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-5" style={{ direction: "rtl" }}>
          <div className="flex items-center">
            <MdOutlineDateRange className="text-[#5F5F66]" />
            <div className="text-[#5F5F66]">{courseDate}</div>
          </div>

          <span
            style={{ color: "var(--color-dark-purple)" }}
            className="font-bold text-lg whitespace-nowrap"
          >
            {`${product.cost} هزار تومان`}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseProductCard;
