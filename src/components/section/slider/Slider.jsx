import React, { useState } from 'react'
import sliderData from "./sliderData"
import "../../../assets/styles/global.css"
import useSlider from "../../../hooks/useSlider"

const Slider = () => {
  const itemsPerPage = 6;
  const { slide, nextSlide, prevSlide } = useSlider({
    itemsLength: sliderData.length,
    itemsPerPage: itemsPerPage
  });
  
  return (
    <div className="bg-gray-500 flex-center md:w-3/4  p-2 rounded-full w-[400px]">
      
      <button className=" p-4 rounded-full mr-5" onClick={nextSlide}>pre</button>
  
      <div className="overflow-hidden">
        <div className="flex w-fit gap-1 " style={{ transform: `translateX(-${slide * (100 / itemsPerPage)}%)`} } >
          {sliderData.map((item, index) => (
            <div key={index} className="flex flex-col  items-center simple-border w-1/6 flex-shrink-0">
            <img src={item.pic} alt={item.title} className="w-2/3" />
          <h3>{item.title}</h3>
          <span>{item.totalNumber}</span>
            </div>
          ))}
        </div>
      </div>
  
      <button className="bg-blue-500 p-4 rounded-full ml-5" onClick={prevSlide}>next</button>
    </div>
  

  )
}

export default Slider
