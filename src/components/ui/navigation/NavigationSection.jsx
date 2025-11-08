import React from 'react'

const NavigationSection = ({title}) => {

  return (
    <div style={{background:"var(--gradient-main)"}} className='w-screen p-5 items-center flex flex-col gap-2'>
    <h1 className='xl:text-3xl text-[20px] md:text-2xl font-bold'>{title}</h1>
  </div>
  )
}

export default NavigationSection
