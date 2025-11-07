import React from 'react'

const IconWrapper = ({ children }) => {
    return (
        <div className ='flex justify-center rounded-full border !border-[#9292B4] shadow-[2px_3px_0px_0px_#00000040] items-center p-0.5 md:p-1.5'>
            {children}
        </div>
    )
}

export default IconWrapper