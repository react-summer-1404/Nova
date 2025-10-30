import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Card1 from './Card1';
import { useQuery } from '@tanstack/react-query';
import { getLandingNews } from '../../../../servises/api/landing/news';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import { Spinner } from '@heroui/react';


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
    return(
      <div className="flex items-end min-h-[50vh]  min-w-[80vh] ">
        <Spinner
          size="lg"
          labelColor="primary"
          label="درحال بارگزاری محصولاتیم"
          variant="wave"
        />
      </div>
    )
  }

  if (isError){
    return <ErrorMessage message={error?.message|| "خطای ناشناخته ای رخ داده"}/>
  }

  return (
    <div style={{ backgroundColor: "var(--color-light-gray)" }} className ='w-screen h-[420px] md:h-[680px] flex justify-center items-center '>
      <div className ='w-[80%] gap-2 flex flex-col items-center md:gap-3 '>
        <button className =' h-[25px] rounded-[30px] bg-[#EFEEFE] text-[9px] text-[#5751E1] px-4 md:px-6'>
          اخبار و وبلاگ ها
        </button>
        <p style={{ color: "var(--color-navy)" }} className ='font-[600] text-[28px] md:text-[28px]'>آخرین خبر ما</p>
        <div className ='md:w-full grid ml-[66px] md:ml-[0px] grid-cols-2 w-[100%] md:h-[85%] md:flex md:items-center text-right gap-2'>
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
