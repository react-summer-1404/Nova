
import React, { useState } from 'react'
import { BiLike, BiDislike } from "react-icons/bi";
import GetReply from './GetReply';
const UserComment = ({ insertDate, author, disslikeCount, likeCount, pictureAddress, describe, title, id }) => {
    const [showReplies, setShowReplies] = useState(false);
    
    const toggleReplies = async () => {
        setShowReplies(prev => !prev)
    }

    // const handleLike = () => likeMutation.mutate(product.courseId);
    // const handleDisLike = () => disLikeMutation.mutate(product.courseId);

    return (
        <>
            <div className='w-full border-t-1 border-[#E8E8E8] h-[120px] lg:h-[140px] flex gap-4'>
                <div className='flex w-full flex-col items-end mt-[10px] lg:mt-[8px] gap-1 lg:gap-2'>
                    <div className='w-full flex justify-between'>
                        <h1 className=' text-right font-[400] text-[9px] md:text-[12px] text-[#6D6C80]'>{insertDate} </h1>
                        <h2 className='font-[600] text-[#1C1A4A]'>{author}</h2>
                    </div>

                    <h3 className='font-[600] text-[14px] md:text-[16px] text-[#1C1A4A]'> {title}</h3>
                    <h4 className=' text-right font-[400] text-[10px] md:text-[14px] text-[#6D6C80]'>{describe}</h4>
                    <div className='flex w-full justify-between'>
                        <div className='w-[85px] h-[25px] flex flex-row gap-0.5'>
                            <button style={{ backgroundColor: "var(--color-soft-gray)" }} className='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{likeCount} <BiLike /></button>
                            <button style={{ backgroundColor: "var(--color-soft-gray)" }} className='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]' >{disslikeCount} <BiDislike /></button>
                        </div>
                        <div className=' h-[25px] flex flex-row gap-0.5'>
                            <button style={{ backgroundColor: "var(--color-light-purple)" }} className='md:px-3 text-[#5751E1] text-[10px] md:text-[12px] p-0.5 px-3 rounded-[30px] flex items-center'
                                onClick={toggleReplies}
                            >
                                {showReplies ? " بستن  پاسخ ها" : " مشاهده پاسخ ها"}
                            </button>
                            <button style={{ backgroundColor: "var(--color-light-purple)" }} className ='md:px-3 p-0.5 px-3 rounded-[30px] flex items-center'
                                // onClick={}
                            >
                                <span className='font-[500] text-[10px] md:text-[12px] text-[#5751E1]'>پاسخ</span>
                            </button>                       
                        </div>
                    </div>
                </div>
                <img src={pictureAddress} className='lg:w-[12%] lg:h-[55%] w-[17%] h-[40%] rounded-full mt-[20px]' />
                
            </div>
            {showReplies && (
                    <GetReply
                        parentCommentId={id}
                    />
                )}
        </>
    )
}

export default UserComment


