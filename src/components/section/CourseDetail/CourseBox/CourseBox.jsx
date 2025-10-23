import React from 'react'
import { FaStar } from "react-icons/fa";
import { PiStudentThin } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import CourseExplanation from '../CourseExplanation/CourseExplanation';
// import {useQuery} from "@tanstack/react-query";
// import {getCourseDetail} from "../../../../servises/api/coursesDetail";
import {IoTimeOutline, IoStatsChartOutline } from "react-icons/io5";
import { BiBook } from "react-icons/bi";
import { PiCertificateThin } from "react-icons/pi";
import CommunicationApp from '../../landing/MasterMentors/CommunicationApp';
import { FaArrowLeft,FaYoutube } from "react-icons/fa";
import YellowButton from '../../../ui/button/YellowButton';
import CourseComment from '../CourseComment/CourseComment';


const CourseBox = () => {
    // const {data} = useQuery({
    //     queryFn : getCourseDetail,
    // });
    return (
        <div className =' w-screen flex justify-center gap-8'>
            <div className ='w-[60%] h-[1600px] flex items-end flex-col gap-7'>
                {/* {data?.map((item) => (

                ))} */}
                <img src="public/1.jpg" className ='w-[100%] md:h-[400px] h-[300px] rounded-[15px]'/>
                <div className ='flex flex-col items-end gap-2.5 md:gap-4'>
                    <div className ='flex justify-between md:gap-3.5 gap-2'>
                        <div style={{color: "var(--color-text-gray)"}} className ='md:text-[14px] text-[11px] font-[400] flex items-center gap-1'>
                            (4.5 امتیاز)
                            <FaStar md:size={"16px"} color='#F8BC24'/>
                        </div>
                        <button style={{backgroundColor: "var(--color-light-purple)"}} className ='md:px-9 p-0.5 px-2 rounded-[30px] flex items-center'
                            type="submit"
                        >                        
                            <span className ='font-[500] text-[10px] md:text-[13px] text-[#161439]'>توسعه</span>
                        </button>                
                    </div>
                    <p className ='md:text-[30px] text-[18px] font-[600] text-[#161439]'>حل تعارضات بین طراحان و مهندسان</p>                
                    <div className ='flex items-center md:gap-12 gap-3.5'>  
                        <div style={{direction: "rtl"}} className ='text-[#7F7E97] font-[400] text-[12px] md:text-[16px] flex items-center gap-0.5 md:gap-1.5'>
                            <PiStudentThin size={"15px"} md:size={"19px"}/>
                            2,250 دانش آموز
                        </div>              
                        <div style={{color: "var(--color-text-gray)"}} className ='font-[400] text-[12px] md:text-[16px] flex items-center gap-0.5 md:gap-1.5'>           
                            24/07/2024
                            <CiCalendar md:size={"19px"} />
                        </div>                  
                        <div className ='flex items-center md:gap-3 gap-1'>
                            <h3 style={{color : "var(--color-navy)"}} className ='font-[400] text-[12px] md:text-[16px]'>محسن</h3>
                            <h2 className ='text-[#7F7E97] font-[400] text-[12px] md:text-[16px]'>توسط</h2>                                                
                            <img src="public/Profile.png" className='w-[30%] mr-[-17px] md:mr-[0]'/>
                        </div>                     
                    </div>
                    <div className ='flex mt-[15px] mr-[4px] gap-2 md:gap-3'>
                        <button 
                            className ='md:px-7 px-2 rounded-full p-1.5 flex bg-[#E6E9EF]'
                            type="submit"
                        >                        
                            <span className ='font-[600] text-[12px] md:text-[16px] text-[#6D6C80]'>نظرات کاربران</span>
                        </button>
                        <button 
                            className ='md:px-12 px-3 rounded-full p-1.5 bg-[#E6E9EF] flex'
                            type="submit"
                        >                        
                            <span className ='font-[600] text-[12px] md:text-[16px] text-[#6D6C80]'>مربیان</span>
                        </button>
                        <button 
                            className ='md:px-5 px-2 rounded-full p-1.5 bg-[#E6E9EF] flex'
                            type="submit"
                        >                        
                            <span className ='font-[600] text-[12px] md:text-[16px] text-[#6D6C80]'>برنامه تحصیلی</span>
                        </button>
                        <button
                            type="submit"
                            className ="bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full flex px-2 md:px-4 p-1 "
                        >                                
                        <span className ='text-[12px] md:text-[16px] font-[600]'>بررسی اجمالی</span>                              
                        </button>                    
                    </div>
                </div>
                {/* <CourseExplanation/> */}
                <CourseComment/>
            </div>        
            <div className ='border border-[#DFDFDF] w-[18%] h-[650px] flex justify-center items-center shadow-[0_0_14px_0_rgba(0,0,0,0.08) rounded-[10px]'>
                <div className ='w-[82%] flex flex-col items-end gap-5 '>
                    <div style={{backgroundColor: "var(--color-dark-purple)"}} className ='w-full h-[90px] text-right rounded-[8px]'>
                        <h2 style={{color: "var(--color-white)"}} className ='font-[500] text-[15px]'>:هزینه این دوره</h2>
                        <h3 style={{color: "var(--color-white)"}} className ='font-[600] text-[22px] mt-[10px] mr-[30px]'>180.000 تومان</h3>
                    </div>
                    <p className ='font-[600] text-[14px] text-[#161439]'> :دوره شامل</p>
                    <div className ='flex border-b-[1px] border-[#D9D9D9] h-[30px] justify-between w-full '>                        
                        <div className ='font-[400] text-[14px] text-[#7F7E97]'>کارشناس</div>
                        <div className ='flex gap-1'>
                        <div className ='font-[400] text-[14px] text-[#161439]'>مرحله</div>
                        <IoStatsChartOutline color='#7F7E97' size={"15px"} />
                        </div>
                    </div>
                    <div className ='flex border-b-[1px] border-[#D9D9D9] h-[30px] justify-between w-full '>                        
                        <div className ='font-[400] text-[14px] text-[#7F7E97]'>11h 20m</div>
                        <div className ='flex gap-1'>
                        <div className ='font-[400] text-[14px] text-[#161439]'>مدت زمان</div>
                        <IoTimeOutline color='#7F7E97' size={"15px"} className='mt-[4px]' />
                        </div>
                    </div>
                    <div className ='flex border-b-[1px] border-[#D9D9D9] h-[30px] justify-between w-full '>                        
                        <div className ='font-[400] text-[14px] text-[#7F7E97]'>12</div>
                        <div className ='flex gap-1'>
                        <div className ='font-[400] text-[14px] text-[#161439]'>درس ها</div>
                        <BiBook color='#7F7E97' size={"15px"} className='mt-[4px]' />
                        </div>
                    </div>
                    <div className ='flex border-b-[1px] border-[#D9D9D9] h-[30px] justify-between w-full '>                        
                        <div className ='font-[400] text-[14px] text-[#7F7E97]'>بله</div>
                        <div className ='flex gap-1'>
                        <div className ='font-[400] text-[14px] text-[#161439]'>گواهینامه ها</div>
                        <PiCertificateThin  size={"16px"} className='mt-[4px]' />
                        </div>
                    </div>
                    <div className ='flex border-b-[1px] border-[#D9D9D9] flex-col gap-1.5 h-[70px] w-full '>                               
                        <div className ='font-[400] text-[14px] text-right text-[#161439]'>:پرداخت امن</div>
                        <div className ='flex gap-1'>
                            <img src="src/assets/images/6cce14a6fef39893ffec7aceae284a74f5721102.png"/>               
                        </div>                        
                    </div>
                    <div className ='flex border-b-[1px]  border-[#D9D9D9] flex-col gap-1.5 h-[80px] w-full '>                               
                        <div className ='font-[400] text-[14px] text-right text-[#161439]'>: این دوره را به اشتراک بگذارید</div>
                        <div className ='w-[70%] ml-[20px] flex gap-1.5 items-center'>
                        <CommunicationApp /> <FaYoutube className ='border-[#9292B4] rounded-full w-[25px] h-[25px] shadow-[2px_3px_0px_0px_#00000040]'/>
                        </div>                        
                    </div>
                    <div className ='w-full font-[600] text-[14px] flex justify-center'>                
                        <button style={{backgroundColor: "var(--color-golden-yellow)"}} className = "border border-black rounded-[50px] shadow-2d-yellow text-[14px] p-2 font-semibold flex cursor-pointer  w-[85%]"> 
                        <FaArrowLeft className =' mt-[5px]'/>
                        <h2 className ='ml-[20px] font-[400] text-[14px] text-right text-[#161439]'>ثبت نام در دوره</h2>
                        </button>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CourseBox