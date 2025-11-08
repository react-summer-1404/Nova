import React from 'react'

const NewsCommentList = ({teacherId,startTime,title,imageAddress}) => {
  return (
    <div className ='justify-center items-center gap-2 flex w-full h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)]'>                        
                    <div className ='w-[10%] lg:w-[6%] gap-2  flex text-dark-purple'><HiOutlineTrash className ='w-[65px] h-[25px] lg:w-[45px] lg:h-[18px]'/> <IoEyeOutline className='w-[65px] h-[25px] lg:w-[45px] lg:h-[18px]'/></div>
                    <div className ='w-[67%] grid grid-flow-col auto-cols-fr'>                
                        <div>{teacherId}</div>
                        <div>{startTime}</div>
                        <div>{title}</div>
                    </div>  
                    <div className=' lg:w-[4%] rounded-full h-[35px]'>{imageAddress}</div>          
                    <div/>
                    
                </div>
  )
}

export default NewsCommentList