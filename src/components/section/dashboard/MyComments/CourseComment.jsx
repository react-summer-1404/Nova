import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { CourseComment } from '../../../../servises/api/userPanel/getCourseComment'
import CoursCommentList from './CoursCommentList'

const CourseComments = ({activeTab}) => {
    const {data} = useQuery({
        queryKey : ["CourseComment"],
        queryFn :   CourseComment,
    })

    
    return (
        <div className ='w-full h-[300px] items-center mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
            {data?.myCommentsDtos?.map((item) =>(
                <CoursCommentList
                activeTab={activeTab}
                    key={item.id}
                    courseId={item.courseId}
                    id={item.id}
                    startTime={item.insertDate.slice(0,10)}
                    author={item.author}
                    title={item.title}
                    accept={item.accept}
                />
                
        ))}
        
        </div>
        
    )
}

export default CourseComments