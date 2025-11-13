import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { NewsComment } from '../../../../servises/api/userPanel/getNewsComment'
import CoursCommentList from './CoursCommentList'

const NewsComments = () => {
    const {data} = useQuery({
        queryKey : ["NewCom"],
        queryFn: NewsComment,
    })
    const comments = data?.myNewsCommetDtos;
  return (
    <div className ='w-full h-[300px] items-center mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
        {comments?.length > 0 ? (
          comments.map((item) => (<CoursCommentList
            key={item.id}
            teacherId={item.teacherId}
            startTime={item.startTime.slice(0,10)}
            title={item.title}
        />))
      ) : (<div>نظری یافت  نشد</div>
        )}
        
    </div>
  )
}

export default NewsComments
