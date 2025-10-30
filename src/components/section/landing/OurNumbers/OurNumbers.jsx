import React from 'react'
import {useQuery} from "@tanstack/react-query";
import {getLandingReport} from "../../../../servises/api/landing/landingReport";

const OurNumbers = () => {
  const {data} = useQuery({
    queryKey : ["report"],
    queryFn : getLandingReport,
  });
  return (
    <div className =' w-screen h-[300px] flex items-center justify-center '>
      <div className ='w-[80%] h-[210px] md:h-[250px] bg-[#282568] rounded-[40px] flex justify-center items-center'>
        <div className ='w-1/4 text-white h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[30px] md:text-[34px]'>{data?.studentCount}K+</div>
          <div className ='text-[13px] md:text-[11px] mr-1'>دانشجو های فعال</div>
        </div>
        <div className ='w-1 rounded-[5px] bg-gradient-to-b from-[#FFFFFF] to-transparent h-[90px]'></div>
        <div style={{color : "var(--color-white)"}} className ='w-1/4 h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[34px] '>{data?.courseCount}+</div>
          <div className ='text-[13px] md:text-[11px] mr-1'>دروس انشکده </div>
        </div>
        <div className ='w-1 rounded-[5px] bg-gradient-to-b from-[#FFFFFF] to-transparent h-[90px]'></div>
        <div style={{color : "var(--color-white)"}} className ='w-1/4 h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[34px] '>{data?.teacherCount}K</div>
          <div className ='text-[13px] md:text-[11px] mr-1'> بهترین اساتید </div>
        </div>
        <div className ='w-1 rounded-[5px] bg-gradient-to-b from-[#FFFFFF] to-transparent h-[90px]'></div>
        <div style={{color : "var(--color-white)"}} className ='w-1/4 h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[34px] '>42K</div>
          <div className ='text-[13px] md:text-[11px] mr-1'> جایزه های بدست امده </div>
        </div>
      </div>
    </div>
  )
}

export default OurNumbers
