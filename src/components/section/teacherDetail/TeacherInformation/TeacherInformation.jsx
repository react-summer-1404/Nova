import React from 'react'
import SocialList from "../socialList/SocialList";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
const TeacherInformation = ({teacherDetail}) => {
  return (
    <div
    style={{ backgroundColor: "var(--color-bg-purple)" }}
    className="w-full xl:h-[368px] p-[50px] flex items-center flex-col md:flex-row gap-[40px] rounded-xl"
    dir="rtl"
  >
    <img src={teacherDetail?.pictureAddress} className="lg:w-[200px] lg:h-[200px] rounded-full w-[120px] h-[120px]"/>
    <div style={{color:"var(--color-white)"}} className="flex flex-col gap-4 items-start">
      <h2 className="font-semibold text-2xl">{teacherDetail?.fullName}</h2>
      <h3>لاراول پرو خبره</h3>
        <div className="flex gap-2 items-center text-responsive">
        <MdOutlineEmail size={20}/>
        <Link><span>{teacherDetail?.linkdinProfileLink}</span></Link>
        </div>
      <p className="text-right text-sm">البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</p>
    <SocialList/>
    </div>
  </div>
  )
}

export default TeacherInformation
