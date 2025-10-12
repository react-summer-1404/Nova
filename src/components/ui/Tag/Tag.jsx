import React from 'react'

const Tag = ({title ,textColor,bgColor}) => {
  return (
    <div style={{backgroundColor:bgColor}} className='rounded-full p-1'>
    <span style={{color:textColor}} className=' p-6 text-base'>{title}</span>
  </div>
  )
}

export default Tag
