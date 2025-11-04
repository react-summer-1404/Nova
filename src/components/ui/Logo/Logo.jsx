import React from 'react'

const Logo = () => {
  return (
    <div className =" gap-1 md:gap-3 flex  ">
         <div className ="flex-column justify-center ">
          <span className ="font-bold xl:text-xl md:text-base hidden md:block">نامبروان</span>
          <span className ="text-xs whitespace-nowrap hidden md:block">همیشه بهترین</span>
          </div>
          <img src="/public/logo.svg" alt="Logo" className ="filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:w-[50px] sm:w-[50px] w-[35px]"></img>
    </div>
        
  )
}

export default Logo
