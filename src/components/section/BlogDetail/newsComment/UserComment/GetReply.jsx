import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { BiLike, BiDislike } from "react-icons/bi";
import { getNewsCommentReply } from '../../../../../servises/api/blogComments/replyComment';

const GetReply = ({ newsId }) => {

    const { data } = useQuery({
        queryKey: ["replies", newsId],
        queryFn: () => getNewsCommentReply(newsId)
    });
    console.log("replyData", newsId)
    return (
        <div className='w-full'>
            {data?.map((item) =>
                <div key={item.id} className='w-full border-t-1 border-[#E8E8E8] h-[120px] lg:h-[140px] flex gap-4'>
                    <div className='flex lg:w-4/5 w-2/3 flex-col items-end mt-[10px] lg:mt-[8px] gap-1 lg:gap-2'>
                        <div className='w-full flex justify-between'>
                            <h1 className=' text-right font-[400] text-[9px] md:text-[12px] text-[#6D6C80]'>{item.insertDate?.slice(0, 10)} </h1>
                        </div>
                        <h3 className='font-[600] text-[14px] md:text-[16px] text-[#1C1A4A]'> {item.title}</h3>
                        <h4 className=' text-right font-[400] text-[10px] md:text-[14px] text-[#6D6C80]'>{item.describe}</h4>

                        <div className='w-[85px] h-[25px] flex flex-row gap-0.5'>
                            <button style={{ backgroundColor: "var(--color-soft-gray)" }} className='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>{item.likeCount} <BiLike /></button>
                            <button style={{ backgroundColor: "var(--color-soft-gray)" }} className='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]' >{item.disslikeCount} <BiDislike /></button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default GetReply