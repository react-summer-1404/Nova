import React from 'react'
import { FaStar } from "react-icons/fa";
import { PiStudentThin } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
const CourseDetail = ({imageAddress,courseRate,title,startTime,teacherName}) => {
    return (
        <div className='flex flex-col gap-7'>
            <img src={imageAddress} className=' md:h-[400px] h-[300px] rounded-[15px]' />
            <div className='flex flex-col items-end gap-2.5 md:gap-4'>
                <div className='flex justify-between md:gap-3.5 gap-2'>
                    <div style={{ color: "var(--color-text-gray)" }} className='md:text-[14px] text-[11px] font-[400] flex items-center gap-1'>
                        ({courseRate} امتیاز)
                        <FaStar md:size={"16px"} color='#F8BC24' />
                    </div>
                    <button style={{ backgroundColor: "var(--color-light-purple)" }} className='md:px-9 p-1 px-2 rounded-[30px] flex items-center'
                        type="submit"
                    >
                        <span className='font-[500] text-[10px] md:text-[13px] text-[#161439]'>{title}</span>
                    </button>
                </div>
                <p className='md:text-[30px] text-[18px] font-[600] text-[#161439]'>حل تعارضات بین طراحان و مهندسان</p>
                <div className='flex items-center md:gap-12 gap-3.5'>
                    <div style={{ direction: "rtl" }} className='text-[#7F7E97] font-[400] text-[12px] md:text-[16px] flex items-center gap-0.5 md:gap-1.5'>
                        <PiStudentThin size={"15px"} md:size={"19px"} />
                         دانش آموز
                    </div>
                    <div style={{ color: "var(--color-text-gray)" }} className='font-[400] text-[12px] md:text-[16px] flex items-center gap-0.5 md:gap-1.5'>
                        {startTime}
                        <CiCalendar md:size={"19px"} />
                    </div>
                    <div className='flex items-center md:gap-3 gap-1'>
                        <h3 style={{ color: "var(--color-navy)" }} className='font-[400] text-[12px] md:text-[16px] whitespace-nowrap'>{teacherName}</h3>
                        <h2 className='text-[#7F7E97] font-[400] text-[12px] md:text-[16px]'>توسط</h2>
                        <img src={"public/Profile.png"} className='w-[30%] mr-[-17px] md:mr-[0]' />
                    </div>
                </div>
                <div className='flex mt-[15px] mr-[4px] gap-2 md:gap-3'>
                    <button
                        className='md:px-7 px-2 rounded-full p-1.5 flex bg-[#E6E9EF]'
                        type="submit"
                    >
                        <span className='font-[600] text-[12px] md:text-[16px] text-[#6D6C80]'>نظرات کاربران</span>
                    </button>
                    <button
                        className='md:px-12 px-3 rounded-full p-1.5 bg-[#E6E9EF] flex'
                        type="submit"
                    >
                        <span className='font-[600] text-[12px] md:text-[16px] text-[#6D6C80]'>مربیان</span>
                    </button>
                    <button
                        className='md:px-5 px-2 rounded-full p-1.5 bg-[#E6E9EF] flex'
                        type="submit"
                    >
                        <span className='font-[600] text-[12px] md:text-[16px] text-[#6D6C80]'>برنامه تحصیلی</span>
                    </button>
                    <button
                        type="submit"
                        className="bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full flex px-2 md:px-4 p-1 "
                    >
                        <span className='text-[12px] md:text-[16px] font-[600]'>بررسی اجمالی</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CourseDetail