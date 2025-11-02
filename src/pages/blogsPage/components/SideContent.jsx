import React from 'react'
import { CategoryFiltering, Search } from "./index"

const SideContent = ({ Query, setQuery, paramItems, handleChange}) => {
  return (
    <div className='w-full flex flex-col justify-start gap-8'>
      <Search Query={Query} setQuery={setQuery} />
      <CategoryFiltering paramItems={paramItems} handleChange={handleChange} />
    </div>
  )
}

export default SideContent
