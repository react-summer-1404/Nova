import React from 'react'
import NavigationSection from '../../components/ui/navigation/NavigationSection'
import JoinTheClub from '../../components/section/landing/JoinTheClub/JoinTheClub'
import GettingStartedSection from '../../components/section/landing/GettingStartedSection/GettingStartedSection'
import aboutPic from "../../assets/images/Section → inner_about_img.svg"
import svg from "../../assets/icons/Section → SVG.svg"
import Tag from '../../components/ui/Tag/Tag'
import { AccentText } from '../../components/ui'
import AboutOption from '../../components/section/landing/AboutSection/AboutOption'
import BlueButton from "../../components/ui/button/BlueButton"
import { GoArrowLeft } from "react-icons/go";
import "../../assets/styles/variable.css"


const AboutUsPage = () => {
  return (
    <>
      <NavigationSection title={"ما کی هستیم"}/>
     <div className="flex flex-col gap-8  w-screen  items-center">
     <div className='flex border w-fit p-[132px] gap-[70px]'>
     <div className='flex flex-col items-end gap-5 w-[650px] border'>
      <Tag title={"دسته بندی های پرطرفدار"} textColor={"#5751E1"} bgColor={"#EFEEFE"} width={"177px"} height={"31px"}/>
      <AccentText beforeLabel={"توانسازی دانش اموزان برای رسیدن به "} afterLabel={"انها برای چالش سطح بعدی"} title={"هدف"}/>
      <span style={{color:"var(--color-text-gray)"}} className='text-right'>سلام! این یک پیام تستی است سلام! این یک پیام تستی است سلام! این یک پیام تستی است سلام! این یک پیام تستی است سلام! این یک پیام تستی است سلام! این یک پیام تستی است سلام! این یک پیام تستی است </span>
      <AboutOption/>
      <BlueButton content={"درباره ما"} BtnIcon={<GoArrowLeft />} />
      </div>

     <div className='flex  w-fit relative'>
        <img src={aboutPic}/>
        <img src={svg} className='absolute top-0 right-0'/>
      </div>

     
     </div>
     </div>
      <JoinTheClub/>
      <GettingStartedSection/>
      <div></div>
    </>
  )
}

export default AboutUsPage
