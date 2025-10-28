import React from 'react'
import { CustomAutocomplete, Search } from './index';

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center gap-2.5'>
        <div className='flex justify-start items-center gap-2.5'><CustomAutocomplete /></div>
        <div> <Search /> </div>
    </div>
  )
}

export default Header
