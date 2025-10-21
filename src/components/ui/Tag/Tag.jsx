import React from 'react'

const Tag = ({title ,textColor,bgColor,icon,width,height}) => {
  return (
    <div style={{backgroundColor:bgColor ,height,width}} className='rounded-full px-2  flex items-center justify-center'>
    <span style={{color:textColor }} className=' p-1 text-base'>{title}</span>
    {icon&&<span>{icon}</span>}
  </div>
  )
}

export default Tag
