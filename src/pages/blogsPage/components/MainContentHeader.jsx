import React from 'react'
import { SortingSection, Search } from './index';

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center gap-2.5 border border-amber-400'>
        <div className='flex justify-start items-center gap-2.5'><SortingSection /></div>
        <div> <Search /> </div>
    </div>
  )
}

export default Header
