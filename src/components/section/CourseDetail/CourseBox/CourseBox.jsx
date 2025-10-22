import React from 'react'
import { FaStar } from "react-icons/fa";

const CourseBox = () => {
  return (
    <div className ='border w-screen flex justify-center gap-8'>
        <div className ='border w-[60%] h-[1600px] flex items-end flex-col gap-7'>
            <img src="public/1.jpg" className ='w-[100%] h-[435px] rounded-[15px]'/>
            <div className ='flex flex-col items-end gap-4'>
                <div className ='flex justify-between gap-3.5'>
                    <div className ='text-[14px] text-[#7F7E97] font-[400] flex gap-1'>
                        (4.5 امتیاز)
                        <FaStar size={"16px"} color='#F8BC24'/>
                    </div>
                    <button style={{backgroundColor: "var(--color-light-purple)"}} className ='md:px-9 p-0.5 px-2.5 rounded-[30px] font-[500] text-[13px] text-[#161439]'>
                    توسعه
                    </button>                
                </div>
                <p className ='text-[30px] font-[600] text-[#161439]'>حل تعارضات بین طراحان و مهندسان</p>
                <div className ='flex items-center gap-2.5'>
                    
                    <div className ='flex gap-3'>
                        <h3 className ='text-[#7F7E97] font-[500] text-[16px]'>محسن</h3>
                        <h2 className ='text-[#161439] font-[500] text-[16px]'>توسط</h2>
                        
                    </div>
                    <div></div>
                    <div></div>
                    <img src="public/profile.png"/>
                </div>
                
            </div>
        </div>        
        <div className ='border w-[18%] h-[800px]'>

        </div>
    </div>
  )
}

export default CourseBox