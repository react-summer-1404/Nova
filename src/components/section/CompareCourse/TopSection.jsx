import React from 'react'
import pic from "../../../assets/images/pic.svg"

const TopSection = () => {
  return (
    <div className="bg-dark-purple w-screen flex-center">
    <div className="w-[80%] flex justify-between">
    <div className="w-[40%] hidden md:block"><img src={pic}/></div>

    <div className="flex-center flex-col gap-3 md:w-[45%] text-right ">
      <h3 className="font-semibold text-[#C8C1ED] md:text-2xl">مفایسه دو دوره باهم</h3>
      <h2 className="font-semibold text-white md:text-3xl">با مقایسه کردن دوره های آموزشی با هم دیگه میتونی دوره مناسب خودتو پیدا کنی!</h2>
    </div>
    </div>
  </div>
  )
}

export default TopSection
