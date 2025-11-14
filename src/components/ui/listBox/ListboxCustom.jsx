import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ListboxCustom = () => {
  const [isSelected, setIsSelected] = useState("userdashboard");
  
  const handleSelect = (tabName) => {
    setIsSelected(tabName)
  }

  return (
    <div className='flex-col-center gap-2 '>
      <Link to={"userdashboard"} className={`tab ${isSelected==="userdashboard" ? "selected" : ""}`} onClick={() => {handleSelect("userdashboard")}}>داشبورد</Link>
      <Link to={"userinformation"} className={`tab ${isSelected==="userinformation" ? "selected" : ""}`} onClick={() => {handleSelect("userinformation" )}}>اطلاعات کاربری</Link>
      <Link to={"mycourses"} className={`tab ${isSelected==="mycourses" ? "selected" : ""}`} onClick={() => {handleSelect("mycourses")}}>دوره های من</Link>
      <Link to={"reservedcourses"} className={`tab ${isSelected==="reservedcourses" ? "selected" : ""}`} onClick={() => {handleSelect("reservedcourses")}}>دوره های رزرو شده</Link>
      <Link to={"mycomment"} className={`tab ${isSelected==="mycomment" ? "selected" : ""}`} onClick={() => {handleSelect("mycomment")}}>دیدگاه های من</Link>
      <Link to={"favorite"} className={`tab ${isSelected==="favorite" ? "selected" : ""}`} onClick={() => {handleSelect("favorite")}}>علاقه مندی ها</Link>
      <Link to={"securitysetting"} className={`tab ${isSelected==="securitysetting" ? "selected" : ""}`} onClick={() => {handleSelect("securitysetting")}}>تنظیمات امنیتی</Link>
    </div> 
  )
}

export default ListboxCustom
