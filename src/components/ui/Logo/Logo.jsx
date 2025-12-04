import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={"/"} className =" gap-1 md:gap-3 flex">
         <div className ="flex-column justify-center ">
          <span className ="font-bold xl:text-xl md:text-base hidden md:block text-black">نامبروان</span>
          <span className ="text-xs whitespace-nowrap hidden md:block text-black">همیشه بهترین</span>
          </div>
          <img src="/logo.svg" alt="Logo" className ="filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:w-[50px] sm:w-[50px] w-[35px]"></img>
    </Link>
        
  )
}

export default Logo
