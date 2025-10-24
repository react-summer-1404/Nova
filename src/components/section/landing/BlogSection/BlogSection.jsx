import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Card1 from './Card1';
import { useQuery } from '@tanstack/react-query';
import { getLandingNews } from '../../../../servises/api/landing/news';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';


const BlogSection = () => {
const apiParams = {
  RowsOfPage: 4, 
  PageNumber: 1,
  
}

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: () => getLandingNews(apiParams),
  })
  console.log(apiParams)

  if (isLoading){
    return <Loader/>
  }

  if (isError){
    return <ErrorMessage message={error?.message|| "خطای ناشناخته ای رخ داده"}/>
  }

  return (
    <div style={{ backgroundColor: "var(--color-light-gray)" }} className='w-screen h-[680px] flex justify-center items-center '>
      <div className ='w-[80%]  h-[70%] flex flex-col items-center gap-3'>
        <button className='w-[9%] h-[25px] rounded-[30px] bg-[#EFEEFE] text-[9px] text-[#5751E1] '>
          اخبار و وبلاگ ها
        </button>
        <p style={{ color: "var(--color-navy)" }} className='font-[600] text-[28px]'>آخرین خبر ما</p>
        <div className ='w-full h-[85%] flex items-center text-right gap-5'>
          {data?.news.map(item => 
            <Card1 
              key={item.id} 
              title={item.title} 
              insertDate={item.insertDate.slice(0,10)}
              describe={item.describe}
              currentImageAddress={item.currentImageAddress}
              currentView={item.currentView}
              currentDissLikeCount={item.currentDissLikeCount}
              currentLikeCount={item.currentLikeCount}
              newsCatregoryName={item.newsCatregoryName}
              />              
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
