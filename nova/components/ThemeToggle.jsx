import React from 'react'
import { PiMoonLight } from "react-icons/pi";
import { PiSunLight } from "react-icons/pi";

const ThemeToggle = () => {
  return (
    <div style={{background: "var(--color-light-gray)"}} className='w-12 flex items-center justify-between gap-3 p-1 rounded-2xl shadow-[inset_0_1px_2px_rgba(0,0,0,.25)]'>
      <PiMoonLight style={{color: "var(--color-dark-gray)"}} className='w-[18px] cursor-pointer'/>
      <PiSunLight style={{background: "var(--color-golden-yellow)"}} className='w-[18px] rounded-[50px] shadow-[1px_1px_2px_rgba(0,0,0,.58)] cursor-pointer'/>
    </div>
  )
}

export default ThemeToggle
