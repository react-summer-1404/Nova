import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaArrowLeft} from "react-icons/fa";
const CourseComment = ({teacherName}) => {
    return (
        <div className =' border-[#DFDFDF] flex justify-center items-center'>
            <div className =' flex flex-col items-end gap-5'>
                <div className ='w-full h-[140px] flex items-center gap-5 bg-[#F7F7FA] rounded-[10px]'>
                    <div className ='flex flex-col items-end ml-[10px]'>
                        <h3 className ='font-[400] text-[10px] md:text-[14px] text-[#1C1A4A]'>نویسنده</h3>
                        <h4 className ='font-[500] text-[16px] md:text-[20px] text-[#1C1A4A]'>{teacherName}</h4>
                        <h2 className =' text-right font-[400] text-[10px] md:text-[14px]'>مهندس حسین نوری کادیجانی دارای مدرک کارشناسی مهندسی کامپیوتر – نرم‌افزار از دانشگاه تربیت دبیر شهید رجایی هستند. ایشان شش سال سابقه برنامه‌نویسی اندروید دارند و تاکنون برنامه‌های موفق و باکیفیتی را در مارکت‌های مطرح ایرانی منتشر کرده‌اند و پیوسته به دنبال یادگیری و کسب دانش بیشتر در این زمینه هستند.</h2>
                    </div>
                    <img src="public/Profile.png" className ='mr-[15px] w-[25%]'/>                   
                </div>
                <p className ='font-[600] text-[15px] md:text-[19px]'>02 نظر</p>
                <div className ='w-full border-b-[#E8E8E8] h-[140px] flex items-center gap-5'>    
                    <div className ='flex flex-col items-end gap-2'>                       
                        <div className='w-full flex justify-between'>
                            <h1 className =' text-right font-[400] text-[9px] md:text-[12px] text-[#6D6C80]'>21 تیر 1386</h1>
                            <h4 className ='font-[600] text-[14px] md:text-[18px] text-[#1C1A4A]'>مریم</h4>
                        </div>
                        <h2 className =' text-right font-[400] text-[10px] md:text-[14px] text-[#6D6C80]'>البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</h2>
                        <div className='flex w-full justify-between'>                                                     
                            <div className='w-[85px] h-[25px] flex flex-row gap-0.5'>
                                <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>169 <BiLike /></button>
                                <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>71 <BiDislike /></button>
                            </div>
                            <button style={{backgroundColor: "var(--color-light-purple)"}} className ='md:px-3 p-0.5 px-3 rounded-[30px] flex items-center'
                                type="submit"
                            >                        
                                <span className ='font-[500] text-[10px] md:text-[12px] text-[#5751E1]'>پاسخ</span>
                            </button>
                        </div>
                    </div>
                    <img src="src/assets/images/profile2.png" className ='mr-[15px] w-[20%]'/>                   
                </div>
                <div className ='w-full border-b-[#E8E8E8] h-[140px] flex items-center gap-5'>    
                    <div className ='flex flex-col items-end gap-2'>                       
                        <div className='w-full flex justify-between'>
                            <h1 className =' text-right font-[400] text-[9px] md:text-[12px] text-[#6D6C80]'>21 تیر 1386</h1>
                            <h4 className ='font-[600] text-[14px] md:text-[18px] text-[#1C1A4A]'>امیر</h4>
                        </div>
                        <h2 className =' text-right font-[400] text-[10px] md:text-[14px] text-[#6D6C80]'> البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</h2>
                        <div className='flex w-full justify-between'>                                                     
                            <div className='w-[85px] h-[25px] flex flex-row gap-0.5'>
                                <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>169 <BiLike /></button>
                                <button style={{ backgroundColor: "var(--color-soft-gray)" }} className ='w-[45%] md:w-[50%] h-full rounded-[15px] font-[500] text-[10px] md:text-[12px] flex flex-row items-center gap-0.5 justify-center text-[#5F5F66]'>71 <BiDislike /></button>
                            </div>
                            <button style={{backgroundColor: "var(--color-light-purple)"}} className ='md:px-3 p-0.5 px-3 rounded-[30px] flex items-center'
                                type="submit"
                            >                        
                                <span className ='font-[500] text-[10px] md:text-[12px] text-[#5751E1]'>پاسخ</span>
                            </button>
                        </div>
                    </div>
                    <img src="src/assets/images/profile3.png" className ='mr-[15px] w-[20%]'/>                   
                </div>
                <div className =' w-full h-[270px] md:h-[390px] bg-[#F7F7FA] rounded-[10px] flex justify-center items-center'>
                    <div className ='w-11/12 h-5/6 flex flex-col items-end gap-2 md:gap-4'>
                        <p style={{color : "var(--color-navy)"}} className ='font-[600] text-[18px] md:text-[22px] '>ارسال نظر</p>
                        <h2 style={{color : "var(--color-text-gray2)"}} className ='font-[400] text-[10px] md:text-[14px]'>عنوان پیام</h2>
                        <input type="text" style={{direction: "rtl", backgroundColor : "var(--color-white)"}} className ='bg-[#FFFFFF] indent-5 focus:outline-none border mt-[-7px] border-[#E1E4E7] w-[100%] h-[40px] rounded-[5px]'/>
                        <h3 style={{color : "var(--color-text-gray2)"}} className ='font-[400] text-[10px] md:text-[14px]'>توضیحات بیشتر </h3>
                        <input type="text" style={{direction: "rtl", backgroundColor : "var(--color-white)"}} className ='border indent-5 focus:outline-none border-[#E1E4E7] mt-[-7px] w-[100%] h-[85px] rounded-[5px]'/>
                        <h4 className ='font-[400] text-[#6D6C80] text-[10px] md:text-[14px]'>نظر شما پس از تایید توسط ادمین ثبت خواهد شد!</h4>
                        <button style={{backgroundColor: "var(--color-golden-yellow)"}} className = "border border-black rounded-[50px] shadow-2d-yellow text-[10px] md:text-[14px] p-1 font-semibold flex cursor-pointer w-[25%] md:w-[15%]"> 
                            <FaArrowLeft className ='ml-[6px] mt-[5px]'/>
                            <h2 className =' font-[400] text-[10px] md:text-[14px] ml-[10px] text-right text-[#161439]'>ارسال نظر </h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseComment