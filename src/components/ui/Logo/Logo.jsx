import React from 'react'
import "../../../assets/styles/global.css"


const Logo = () => {
  return (
    <div className =" gap-1 md:gap-3 flex w-1/5 ">
          <img src="/public/logo.svg" alt="Logo" className ="filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-[50px]"></img>
         <div className="flex-column justify-center ">
          <span className="font-bold md:text-xl hidden md:block">نامبروان</span>
          <span className="text-xs whitespace-nowrap hidden md:block">همیشه بهترین</span>
          </div>
    </div>
        
  )
}

export default Logo
