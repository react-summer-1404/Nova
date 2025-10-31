import React from 'react'

import SameText from './SameText';

const CourseExplanation = ({describe}) => {
    return (
        <div className ='  flex justify-center items-center w-full'>
            <div className =' flex flex-col items-end w-[95%] gap-3'>
                <p className ='font-[600] text-[20px] md:text-[24px]'>شرح دوره</p>
                <h2 className ='font-[400] text-[12px] md:text-[16px] text-right text-[#6D6C80] '>
                {describe}
                </h2>
                {/* <p className ='font-[600] text-[22px]'>در این دوره چه چیزی یاد خواهید گرفت؟</p>
                <h2 className ='font-[400] text-[14px] text-right text-[#6D6C80] '>
                در حال حاضر جاوا اسکریپت یکی از محبوب‌ترین زبان‌های برنامه‌نویسی وب شناخته می‌شود و تقریبا توسط تمام مرورگرهای وب پشتیبانی می‌شود. این زبان به طور معمول با HTML و CSS برای ایجاد صفحات وب تعاملی و پویا به کار می‌رود.
                </h2>
                <SameText title={"با رنگ و گرادیان و شبکه کار کنید"}/>
                <SameText title={"تمام میانبرهای مفید"}/>
                <SameText title={"قادر به ایجاد بروشور، بروشور، تبلیغات باشید"}/>
                <SameText title={"نحوه کار با تصاویر و متن"}/>   
                <h2 className ='font-[400] text-[14px] text-right text-[#6D6C80] '>
                امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است، طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت، اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار، برای رونق کار خود به دنبال طراحان حرفه‌ای برای طراحی سایتی مناسب و کارآمد هستند؛ لذا یادگیری روش‌های مناسب و به‌روز طراحی سایت، مورد توجه بسیاری از علاقه‌مندان و کارجویان قرار گرفته است.
                </h2>              */}
            </div>
            
        </div>
    )
}

export default CourseExplanation