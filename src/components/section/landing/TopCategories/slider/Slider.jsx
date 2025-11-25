import React, { useEffect, useState } from "react";
import { getCourses } from "../../../../../servises/api/courses/coursList";
import useTechs from "../../../../../hooks/useTech";

const Slider = () => {
  const { data } = useTechs();
  const [newTechList, setNewTechList] = useState([]);


  async function setAmount() {
    const apiParams = {
      TechCount: 1,
      PageNumber: 1,
      RowsOfPage: 12,
    };

    const updated = [];

    for (let i = 0; i < data.length; i++) {
      const newTech = await getCourses({ ...apiParams, ListTech: data[i].id });

      updated.push({
        ...data[i],
        count: newTech?.courseFilterDtos.length || 0,
      });
    }

    setNewTechList(updated);
  }

  

  useEffect(() => {
    if (data) setAmount();
  }, [data]);

  return (
    <div
      className="flex justify-evenly items-center gap-2 md:gap-10 px-10 sm:px-8 p-8 rounded-4xl w-fit mx-auto  "
    >
        <div
          className="flex transition-transform duration-500 ease-in-out gap-[44px] flex-wrap"
        >
          {newTechList?.map((item) => (
            <div key={item.id} className="xl:w-[250px] md:w-[200px] w-[300px]">
              <TechCard item={item} />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Slider;

/* ------------------ کارت جدید HoverDevCards ولی داینامیک ------------------ */

const TechCard = ({ item }) => {
  return (
    <div className="w-full p-4 rounded   relative overflow-hidden group bg-light-purple cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">

      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />

      {/* Big icon (background icon) */}
      <img
        src={`/icons/${item.techName}.svg`}
        className="absolute z-10 -top-12 -right-12 w-32 opacity-20 group-hover:rotate-12 transition-transform duration-300"
        alt={item.techName}
      />

      {/* Main icon */}
      <img
        src={`/icons/${item.techName}.svg`}
        className="mb-2 w-10 relative z-10 group-hover:brightness-200 transition-all duration-300"
        alt={item.techName}
      />

      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {item.techName}
      </h3>

      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        ({item.count})
      </p>
    </div>
  );
};
