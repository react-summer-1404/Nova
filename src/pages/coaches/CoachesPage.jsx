import React from 'react'
import TeacherCard from '../../components/section/landing/MasterMentors/TeacherCArd'
import {getTeachers} from "../../servises/api/teachers"
import { useQuery } from '@tanstack/react-query'

const CoachesPage = () => {
  const {data} = useQuery({
    queryKey : ["AllTeachers"],
    queryFn :getTeachers,
  })
  
  return (
    <div className ='w-screen flex  md:px-6  justify-center pb-8 '>
        <div className ='w-fit md:w-[80%] flex justify-end p-4  '>
          {data?.map(item => (
              <TeacherCard
                key={`${item.id} + ${item.fullName}`}
                fullName={item.fullName}
                pictureAddress={item.pictureAddress}
                courseCounts={item.courseCounts}
                id={item.teacherId}
              />
          ))
        }
        
          
        </div>
      </div>
  )
}

export default CoachesPage
