import React from "react";
import "../../../../../assets/styles/global.css";
import "../../../../../assets/styles/variable.css";
import YellowButton from "../../../../ui/button/YellowButton";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSlider } from "../../../../../hooks/useSlider";
import { useQuery } from "@tanstack/react-query";
import instance from "../../../../../core/interceptor/interceptor";

const Slider = () => {
  const getTechs = async () => {
    const response = await instance.get("/Home/GetTechnologies");
    console.log("API Response:", response.data);
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["techs"],
    queryFn: getTechs,
  });

  const itemsPerPage = 6;

  const { slide, nextSlide, prevSlide } = useSlider({
    itemsLength: data ? data.length : 0,
    itemsPerPage: itemsPerPage,
  });

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div
      style={{ backgroundColor: "var(--color-light-gray)" }}
      className="flex-center gap-4 md:w-3/4 p-4 rounded-full w-[400px]"
    >
      <YellowButton
        onClick={prevSlide}
        width="50px"
        height="50px"
        icon={<GoArrowLeft className="-m-1" />}
      />

      <div className="overflow-hidden flex-1">
        <div
          className="flex w-fit transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slide * (100 / itemsPerPage)}%)` }}
        >
          {/* {techData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center simple-border w-1/6 flex-shrink-0"
            >
              <img src={item.pic} alt={item.title} className="w-2/3" />
              <h3 className="font-medium text-responsive">{item.title}</h3>
              <span style={{ color: "var(--color-text-gray)" }}>
                ({item.totalNumber})
              </span>
            </div>
          ))} */}
        </div>
      </div>

      <YellowButton
        onClick={nextSlide}
        width="50px"
        height="50px"
        icon={<GoArrowRight className="-m-1" />}
      />
    </div>
  );
};

export default Slider;
