import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getCourses } from '../../../servises/api/courses/coursList';

const Result = ({currentItems}) => {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn:getCourses,
  });
  return (
  
      <div className="lg:flex gap-2 hidden whitespace-nowrap">
      <span style={{ color: "var(--color-dark-purple)" }}>{data?.totalCount}</span>
      <span>از</span>
      <span style={{ color: "var(--color-dark-purple)" }}>{currentItems?.length}</span>
      <span>نمایش نتیجه</span>
    </div>
  )
}

export default Result
