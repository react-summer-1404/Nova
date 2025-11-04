import React from 'react'
import NavigationSection from '../../components/ui/navigation/NavigationSection'
import ErrorSection from "../../assets/images/ErrorSection.svg"
import PurpleBtn from '../../components/ui/button/BlueButton'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom'

const NotFoundingPage = () => {
  const BreadcrumbsItems=[{to:"*" ,label: "صفحه خطا"}]
  return (
    <div className='flex flex-col  w-screen gap-6' >
     <NavigationSection title={"صفحه خطا"} BreadcrumbsItems={BreadcrumbsItems}/>
     <div className='flex flex-col items-center gap-[53px] p-[90px]'>
     <img src={ErrorSection}/>
     <div>
     <h2 className='font-semibold text-[40px]'>صفحه خطا !</h2>
     <h2 className='font-semibold text-[40px]'>!متاسفم! این صفحه در دسترس نیست</h2>
     </div>
    <Link to={"/"}><PurpleBtn content={"به صفحه اصلی برگردید"} BtnIcon={<GoArrowLeft/>}/></Link>

     </div>
     
    </div>
  )
}

export default NotFoundingPage
