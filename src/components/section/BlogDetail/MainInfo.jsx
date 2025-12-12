import React from 'react'
import icon from "../../../assets/icons/Symbol(2).svg";
import CourseExplanation from '../CourseDetail/CourseExplanation/CourseExplanation';

const MainInfo = ({detailItems}) => {
  console.log("describe",detailItems?.describe)
  console.log("API DESCRIBE:", detailItems?.describe, typeof detailItems?.describe);

  return (
    <div className="flex flex-col gap-22 border-b-1 border-border-gray pb-12">
            <div className="flex flex-col gap-5 text-right">
              <h1 className="font-semibold lg:text-4xl md:text-xl ">{detailItems?.title}</h1>
              {/* <p className="text-responsive">{detailItems?.describe}</p> */}
              <CourseExplanation describe={detailItems?.describe}/>
            </div>
            <div className="bg-light-purple flex p-8 justify-between  border-r-6 border-dark-purple text-right">
              <img className='w-[30px] sm:w-[60px]' src={icon} />
              <p className="w-4/5 text-responsive ">
                البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده
                می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله
                پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا
                ترکیبی با سایر زبان‌ها استفاده شده است.
              </p>
            </div>
          </div>
  )
}

export default MainInfo
