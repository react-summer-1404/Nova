import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
const Card1 = () => {
    return (
        <div style={{ backgroundColor: "var(--color-white)" }} className ='w-[75%] h-[260px] md:w-[25%] md:h-[375px] rounded-[10px] flex flex-col gap-1 md:gap-2 items-center justify-center'>
            <img src="/public/2e915ad34de0b07db8fd026b2dd17808be79f286.jpg" className ='w-[73%] object-cover rounded-[6px]' />
            <p style={{ color: "var(--color-navy)" }} className ='font-[600] text-[12px] md:text-[16px]'>توسعه خود را بسازید و به عنوان م ...
            </p>
            <div className ='md:w-[78%] w-[85%] flex items-center justify-between'>
                <h2 style={{ color: "var(--color-text-gray)" }} className ='font-[400] text-[8px] md:text-[12px]'>20 جولای 2024</h2>
                <div style={{ color: "var(--color-white)", backgroundColor: "var(--color-dark-purple)" }} className ='w-[25%] h-[25px] md:w-[30%] md:h-[30px] rounded-full font-[500] text-[9px] md:text-[12px] flex justify-center items-center' >علوم پایه</div>
            </div>
            <h2 style={{ color: "var(--color-text-gray)" }} className ='border-b-[1px] border-[#B5B5C380] md:h-[60px] px-3 h-[50px] md:px-5 font-[500] text-[10px] md:text-[12px] '>این خبر برای این است که توسعه خود را بسازید و عنوان محتوای خود میتوانیذ قرار دهید این خبر برای....  </h2>
            <div className ='md:w-[78%] w-[85%] flex justify-between'>
                <div className ='w-[50%] md:w-[85px] h-[25px] flex flex-row gap-0.5'>
                    <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>169 <BiLike /></button>
                    <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>71 <BiDislike /></button>
                </div>
                <div style={{ color: "var(--color-text-gray)" }} className ='flex flex-row gap-0.5'>
                    <div className ='font-[500] text-[12px] md:text-[14px] mt-[0px] md:mt-[-2px]'>20</div>
                    <MdOutlineRemoveRedEye />
                </div>
            </div>
            
        </div>
    )
}

export default Card1