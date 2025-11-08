import React from 'react'

import { HiOutlineTrash } from 'react-icons/hi2'
import { IoEyeOutline } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'
import { favCourse } from '../../../../../servises/api/userPanel/getMyFavoriteCourses'
import CourseStatusList1 from './CourseStatusList1/CourseStatusList1'



const FavoritesCourse = () => {
    const {data} = useQuery({
        queryKey : ["favCourse"],
        queryFn : favCourse,
    })
    console.log(data?.favoriteCourseDto);


    return (
        <div className ='w-full h-[300px] items-center mt-[12px] gap-1.5 lg:gap-3 flex flex-col'>
            {data?.favoriteCourseDto?.map((item) =>(
                <CourseStatusList1
                    key={item.id}
                    teacheName={item.teacheName}
                    lastUpdate={item.lastUpdate.slice(0,10)}
                    courseTitle={item.courseTitle}
                />
                
        ))}
        
        </div>
        
    )
}

export default FavoritesCourse                   