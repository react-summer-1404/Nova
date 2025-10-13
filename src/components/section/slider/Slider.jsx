import React, { useState } from 'react'
import sliderData from "./sliderData"
import "../../../assets/styles/global.css"
import "../../../assets/styles/variable.css"
import useSlider from "../../../hooks/useSlider"
import YellowButton from '../../ui/button/YellowButton'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Slider = () => {
  const itemsPerPage = 6;
  const { slide, nextSlide, prevSlide } = useSlider({
    itemsLength: sliderData.length,
    itemsPerPage: itemsPerPage
  });
  
  return (
    <div style={{backgroundColor: "var(--color-light-gray)"}} className=" flex-center md:w-3/4  p-2 rounded-full w-[400px]">
      
      <YellowButton onClick={prevSlide}  width={"50px"} height={"50px"} icon={<GoArrowLeft className='-m-1'/>}/>
  
      <div className="overflow-hidden">
        <div className="flex w-fit gap-1 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${slide * (100 / itemsPerPage)}%)`} } >
          {sliderData.map((item, index) => (
            <div key={index} className="flex flex-col  items-center simple-border w-1/6 flex-shrink-0">
            <img src={item.pic} alt={item.title} className="w-2/3" />
          <h3 className='font-medium text-responsive'>{item.title}</h3>
          <span style={{color:("var(--color-text-gray)")}}>{`(${item.totalNumber})`}</span>
            </div>
          ))}
        </div>
      </div>
  
      <YellowButton onClick={nextSlide}  width={"50px"} height={"50px"} icon={<GoArrowRight className='-m-1'/>}/>


    </div>
  

  )
}

export default Slider
