import React from 'react'
import CourseBox from '../../components/section/CourseDetail/CourseBox/CourseBox'
import { useParams } from 'react-router-dom'

const CourseDetailPage = () => {
  const { id } = useParams()
  return (
    <div>
      <CourseBox />
    </div>
  )
}

export default CourseDetailPage
