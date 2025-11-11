import React from 'react'
import {useQuery} from "@tanstack/react-query";
import {getLandingReport} from "../../../../servises/api/landing/landingReport";

const OurNumbers = () => {
  const {data} = useQuery({
    queryKey : ["report"],
    queryFn : getLandingReport,
    retry : (failureCount, error) => {
      if (error?.response?.status == 429 && failureCount<3) return true;
      return false
    },
    retryDelay : attemptIndex => Math.min(1000*2** attemptIndex,10000),
    staleTime : 1000*60*5,
    cacheTime:1000*60*10
  });
  return (
    <div className =' w-screen h-[300px] flex items-center justify-center '>
      <div className ='w-[80%] h-[170px] sm:h-[210px] lg:h-[250px] bg-[#282568] rounded-[40px] flex justify-center items-center'>
        <div className ='w-1/4 text-white h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[26px] sm:text-[30px] lg:text-[34px]'>{data?.studentCount}K+</div>
          <div className ='text-[8px] sm:text-[11px] lg:text-[13px] mr-1'>دانشجو های فعال</div>
        </div>
        <div className ='w-1 rounded-[5px] bg-gradient-to-b from-[#FFFFFF] to-transparent h-[90px]'></div>
        <div style={{color : "var(--color-white)"}} className ='w-1/4 h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[26px] sm:text-[30px] lg:text-[34px]'>{data?.courseCount}+</div>
          <div className ='text-[8px] sm:text-[11px] lg:text-[13px] mr-1'>دروس دانشکده </div>
        </div>
        <div className ='w-1 rounded-[5px] bg-gradient-to-b from-[#FFFFFF] to-transparent h-[90px]'></div>
        <div style={{color : "var(--color-white)"}} className ='w-1/4 h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[26px] sm:text-[30px] lg:text-[34px]'>{data?.teacherCount}K</div>
          <div className ='text-[8px] sm:text-[11px] lg:text-[13px] mr-1'> بهترین اساتید </div>
        </div>
        <div className ='w-1 rounded-[5px] bg-gradient-to-b from-[#FFFFFF] to-transparent h-[90px]'></div>
        <div style={{color : "var(--color-white)"}} className ='w-1/4 h-[200px] flex justify-center flex-col'>
          <div className ='font-[900] text-[26px] sm:text-[30px] lg:text-[34px]'>42K</div>
          <div className ='text-[8px] sm:text-[11px] lg:text-[13px] mr-1'> جایزه های بدست امده </div>
        </div>
      </div>
    </div>
  )
}

export default OurNumbers
