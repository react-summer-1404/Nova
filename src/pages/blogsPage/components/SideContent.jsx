import React from 'react'
import { Result,CategoryFiltering } from "./index"

const SideContent = () => {
  return (
    <div className='flex flex-col justify-start gap-8'>
      <Result />
      <CategoryFiltering />
    </div>
  )
}

export default SideContent
