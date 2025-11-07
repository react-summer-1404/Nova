import React from 'react'


const CourseStatusList2 = ({items2}) => {
    return (
        <div className='grid grid-flow-col auto-cols-fr py-2 text-[10px] lg:text-[14px] font[600] text-navy bg-light-gray rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]'>
            {items2.map((item, index) =>(
                <div key={index} className={`text-center mr-[10px] flex flex-col items-center gap-1 ${item.className || ""}`}>
                    {item.image && (
                    <img
                        src={item.image}
                        alt=''
                        className ='w-6 h-6 rounded-full object-cover'
                    />
                    )}
                    {item.icon && (
                        <span>{item.icon}</span>
                    )
                    }
                <span>{item.text}</span>
                </div>                               
            ))}
        </div>
    )
}

export default CourseStatusList2