import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CompareCoursePage = () => {
  const [searchParams] = useSearchParams();

  const courseIds = searchParams.getAll("courseId");
  console.log("courseIds", courseIds); 
  return (
    <div>
      <h1>Compare Course Page</h1>
     <div className='text-red-500'>{courseIds[0]}</div>
     <div>{courseIds[1]}</div>
    </div>
  );
};

export default CompareCoursePage;
