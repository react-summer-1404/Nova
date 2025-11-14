import React from 'react'

const CourseTableRow = ({items}) => {
    return (
        <div className='grid grid-flow-col auto-cols-fr py-2 text-[14px] lg:text-[17px] font[600] text-navy '>
            {items.map((items, index) =>(
                <div key={index}>{items}</div>
            ))}
        </div>
    )
    }

export default CourseTableRow