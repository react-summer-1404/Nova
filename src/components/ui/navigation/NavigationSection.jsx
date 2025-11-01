import React from 'react'
import "../../../assets/styles/global.css"
// import BreadcrumbsComponent from './BreadcrumbsComponent';

const NavigationSection = ({title}) => {

  return (
    <div style={{background:"var(--gradient-main)"}} className='w-screen p-5 items-center flex flex-col gap-2'>
    <h1 className='text-4xl font-bold '>{title}</h1>
    {/* <BreadcrumbsComponent BreadcrumbsItems={BreadcrumbsItems}/> */}
  </div>
  )
}

export default NavigationSection
