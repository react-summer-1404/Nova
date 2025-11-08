import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { CourseComment } from '../../../../servises/api/userPanel/getCourseComment'
import CoursCommentList from './CoursCommentList'

const CourseComments = () => {
    const {data} = useQuery({
        queryKey : ["CourseComment"],
        queryFn :   CourseComment,
    })
    // const newList = data?.myCommentsDtos ? [data.myCommentsDtos]:[];
    return (
        <div className ='w-full h-[300px] items-center mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
            {data?.myCommentsDtos?.map((item) =>(
                <CoursCommentList
                    key={item.id}
                    // teacherId={item.teacherId}
                    // startTime={item.startTime}
                    title={item.title}
                    describe={item.describe}
                />
                
        ))}
        
        </div>
        
    )
}

export default CourseComments