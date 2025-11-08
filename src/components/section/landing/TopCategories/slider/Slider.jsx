import React, { useEffect, useState } from "react";
import YellowButton from "../../../../ui/button/YellowButton";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSlider } from "../../../../../hooks/useSlider";
import { getCourses } from "../../../../../servises/api/courses/coursList";
import useTechs from "../../../../../hooks/useTech"


const Slider = () => {
  const { data } = useTechs();

  const [newTechList, setNewTechList] = useState([])

  const itemsPerPage = 6;

  async function setAmount() {
    const apiParams = {
      TechCount: 1,
      PageNumber :1,
      RowsOfPage:12
    };

    for (let i = 0; i < data.length; i++) {
      const newTech = await getCourses({...apiParams, ListTech: data[i].id});

      data[i].count = newTech?.courseFilterDtos.length
      setNewTechList([...data])
    }
  }

  const { slide, nextSlide, prevSlide } = useSlider({
    itemsLength: data ? data.length : 0,
    itemsPerPage: itemsPerPage,
  });

  useEffect(() => {
    if (data) {
      setAmount()
    }
  }, [data])

  return (
    <div
      // style={{ backgroundColor: "var(--color-light-gray)" }}
      className="flex justify-evenly items-center  gap-2 md:gap-10 px-10 sm:px-8 p-8 rounded-full w-fit  mx-auto "
    >
      {/* <YellowButton
        onClick={prevSlide}
        width="50px"
        height="50px"
        icon={<GoArrowLeft className="-m-1" />}
      /> */}

      <div className="overflow-hidden flex-1  flex-center ">
        <div
          className="flex flex-1 transition-transform duration-500 ease-in-out gap-[44px]  "
          style={{ transform: `translateX(-${slide * (100 / itemsPerPage)}%)` }}
        >
          {newTechList?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center simple-border  flex-shrink-0 "
            >
              <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]">
                <img src={`/icons/${item.techName}.svg`} alt={item.techName} />
              </div>
              <h3 className="font-medium text-responsive">{item.techName}</h3>
              <span style={{ color: "var(--color-text-gray)" }}>
                ({item.count})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* <YellowButton
        onClick={nextSlide}
        width="50px"
        height="50px"
        icon={<GoArrowRight className="-m-1" />}
      /> */}
    </div>
  );
};

export default Slider;

