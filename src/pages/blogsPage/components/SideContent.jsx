import React from 'react'
import { CategoryFiltering, Search } from "./index"

const SideContent = () => {
  return (
    <div className='w-full flex flex-col justify-start gap-8'>
      <Search />
      <CategoryFiltering />
    </div>
  )
}

export default SideContent
