import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
const FAQSection = () => {
  return (
    <div className ='w-screen bg-[#F7F7F9] h-[780px] flex items-center'>
      <div className ='w-2/4 h-[480px] flex flex-col items-end text-right gap-3 pr-10'>
        <button className ='w-[13%] h-[25px] rounded-[30px] bg-[#EFEEFE] text-[9px] text-[#5751E1] '>
          سوالات متداول
        </button>
        <span className ='text-[19px] font-[700] w-[32%] leading-6 text-[#161439]'>شروع به تمرین از مربیان حرفه ای جهان</span>
        <h2 className ='text-[10px] w-[51%] text-[#6D6C80] font-[400]'>
        Grooveصندوق ورودی مشترک بصری این کار را برای اعضای تیم آسان میکند 
        سازماندهی، اولویت بندی و.در این قسمت.
        </h2>
        <div className ='w-[57%] border-b-[1px] border-b-[#B2BBCC] h-[45px] font-[500] text-[14px] text-[#5751E1] pt-1.5'>نامبر وان می خواهد به شما چه چیزی دهد؟
          <IoIosArrowDown className ='size-4 mt-[-15px] ml-[10px]'/>
        </div>
        <h3 className ='w-[57%] h-[45px] font-[400] text-[10px] text-[#1C1A4A] pt-1.5'>
          صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از نوع و درهم گرفت.
        </h3>
        <div className ='w-[57%] border-b-[1px] border-b-[#B2BBCC] h-[45px] font-[500] text-[14px] text-[#6D6C80] pt-1.5'> چرا ما را برای تحصیل خود انتخاب کنید؟
          <FaChevronLeft className ='size-3 mt-[-15px] ml-[10px]'/>
        </div>
        <div className ='w-[57%] border-b-[1px] border-b-[#B2BBCC] h-[45px] font-[500] text-[14px] text-[#6D6C80] pt-1.5'>چگونه خدماتی را برای شما ارائه می کنیم؟
          <FaChevronLeft className ='size-3 mt-[-15px] ml-[10px]'/>
        </div>
        <div className ='w-[57%] border-b-[1px] border-b-[#B2BBCC] h-[45px] font-[500] text-[14px] text-[#6D6C80] pt-1.5'>آیا برای دوره خود مقرون به صرفه هستید؟
          <FaChevronLeft  className ='size-3 mt-[-15px] ml-[10px]'/>
        </div>
      </div>
      <div className ='w-2/4 h-[480px]'>
        <img src="src/assets/images/div.faq__img.png" className ='h-[410px] ml-[68px]'/>
      </div>
    </div>
  )
}

export default FAQSection
