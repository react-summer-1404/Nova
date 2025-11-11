import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";


const Card1 = ({title,insertDate,miniDescribe,currentImageAddress,currentView,currentDissLikeCount,currentLikeCount,newsCatregoryName}) => {
    return (
        <div className ='w-[75%] sm:h-[260px] h-[190px] bg-white md:w-[25%] lg:h-[375px] rounded-[10px] flex flex-col gap-1 md:gap-2 items-center justify-center'>
            <img src={currentImageAddress} className ='w-[80%] object-cover rounded-[6px]'/> 
            <p className ='text-navy font-[600] text-[9px] sm:text-[12px] lg:text-[16px]'> 
            {title}
            </p>
            <div className ='md:w-[78%] w-[85%] flex items-center justify-between'>
                <h2 className ='text-text-gray2 font-[400] text-[7px] sm:text-[8px] lg:text-[12px]'>{insertDate} </h2>
                <div className ='text-white bg-dark-purple w-[34%] h-[20px] sm:w-[25%] sm:h-[25px] lg:w-[30%] lg:h-[30px] rounded-full font-[500] text-[9px] md:text-[12px] flex justify-center items-center' >{newsCatregoryName} </div>
            </div>
            <h2 className ='text-text-gray lg:h-[60px] px-3 sm:h-[50px] h-[40px] md:px-5 font-[500] text-[9px] sm:text-[10px] lg:text-[12px] '>{miniDescribe}</h2>
            <div className ='border-b-[1px] border-[#B5B5C380] w-[85%]'></div>
            <div className ='md:w-[78%] w-[85%] flex justify-between'>
                <div className ='w-[50%] md:w-[85px] h-[25px] flex flex-row gap-0.5'>
                    <button className ='bg-soft-gray w-[55%] sm:w-[45%] lg:w-[50%] h-[20px] lg:h-full rounded-[15px] font-[500] text-[9px] sm:text-[10px] lg:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{currentLikeCount} <BiLike /></button>
                    <button className ='bg-soft-gray w-[55%] sm:w-[45%] lg:w-[50%] h-[20px] lg:h-full rounded-[15px] font-[500] text-[9px] sm:text-[10px] lg:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{currentDissLikeCount} <BiDislike /></button>
                </div>
                <div className ='text-text-gray flex flex-row gap-0.5'>
                    <div className ='font-[500] text-[10px] sm:text-[12px] lg:text-[14px] mt-[2px] sm:mt-[0px] lg:mt-[-2px]'>{currentView}</div>
                    <MdOutlineRemoveRedEye />
                </div>
            </div>
            
        </div>
    )
}

export default Card1