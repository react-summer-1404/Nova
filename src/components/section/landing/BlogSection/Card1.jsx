import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";


const Card1 = ({title,insertDate,describe,currentImageAddress,currentView,currentDissLikeCount,currentLikeCount,newsCatregoryName}) => {
    return (
        <div style={{ backgroundColor: "var(--color-white)" }} className ='w-[25%] h-[375px] rounded-[10px] flex flex-col gap-2 items-center justify-center'>
            <img src={currentImageAddress} className ='w-[80%] h-[185px] object-cover rounded-[6px]'/> 
            <p style={{ color: "var(--color-navy)" }} className ='font-[600] text-[16px]'> 
            {title}
            </p>
            <div className='w-[78%] flex items-center justify-between'>
                <h2 style={{ color: "var(--color-text-gray2)" }} className='font-[400] text-[12px]'>{insertDate} </h2>
                <div style={{ color: "var(--color-white)", backgroundColor: "var(--color-dark-purple)" }} className='w-[30%] h-[30px] rounded-full font-[500] text-[12px] flex justify-center items-center' >{newsCatregoryName} </div>
            </div>
            <h2 style={{ color: "var(--color-text-gray2)" }} className='border-b-[1px] border-[#B5B5C380] h-[45px] w-[78%] font-[500] text-[12px] '>{describe}</h2>
            <div className='w-[78%] flex justify-between'>
                <div className='w-[85px] h-[25px] flex flex-row gap-0.5'>
                    <button style={{ backgroundColor: "var(--color-soft-gray)" }} className='w-[50%] h-full rounded-[15px] font-[500] text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{currentLikeCount} <BiLike /></button>
                    <button style={{ backgroundColor: "var(--color-soft-gray)" }} className='w-[50%] h-full rounded-[15px] font-[500] text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{currentDissLikeCount} <BiDislike /></button>
                </div>
                <div style={{ color: "var(--color-text-gray2)" }} className='flex flex-row gap-0.5'>
                    <div className=' font-[500] text-[14px] mt-[-2px]'>{currentView}</div>
                    <MdOutlineRemoveRedEye />
                </div>
            </div>
            
        </div>
    )
}

export default Card1