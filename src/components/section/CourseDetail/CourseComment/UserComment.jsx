import React from 'react'

const UserComment = ({insertDate, author,disslikeCount,likeCount, pictureAddress,describe,title} ) => {

    
    
    return (
        <div className ='w-full border-b-[#E8E8E8] h-[140px] flex items-center gap-5'>
            <div className ='flex flex-col items-end gap-2'>
                <div className ='w-full flex justify-between'>
                    <h1 className =' text-right font-[400] text-[9px] md:text-[12px] text-[#6D6C80]'>{insertDate} </h1>
                    <h2 className ='font-[600] text-[16px] md:text-[18px] text-[#1C1A4A]'>{author}</h2>
                    <h3 className ='font-[600] text-[14px] md:text-[16px] text-[#1C1A4A]'>{title}</h3>
                </div>
                <h2 className =' text-right font-[400] text-[10px] md:text-[14px] text-[#6D6C80]'>{describe}</h2>
                <div className ='flex w-full justify-between'>
                    <div className ='w-[85px] h-[25px] flex flex-row gap-0.5'>
                        <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{likeCount} <BiLike /></button>
                        <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{disslikeCount} <BiDislike /></button>
                    </div>
                    <button style={{ backgroundColor: "var(--color-light-purple)" }} className ='md:px-3 p-0.5 px-3 rounded-[30px] flex items-center'
                        type="submit"
                    >
                        <span className ='font-[500] text-[10px] md:text-[12px] text-[#5751E1]'>پاسخ</span>
                    </button>
                </div>
            </div>
            <img src={pictureAddress} className ='mr-[15px] w-[20%]' />
        </div>
    )
}

export default UserComment