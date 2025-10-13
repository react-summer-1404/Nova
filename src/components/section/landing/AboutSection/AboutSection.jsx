import React from 'react'
import AboutPic from "../../../../assets/images/aboutUsHome.svg"
import Tag from '../../../ui/Tag/Tag'
import "../../../../assets/styles/variable.css"
import Contex from '../../../ui/accentText/contex'


const AboutSection = () => {
  return (
    <div className='flex'>
      <img src={AboutPic}></img>
      <div>
        <Tag title={"درباره ما بیشتر بدانید"} textColor={"var(--color-dark-purple)"} bgColor={"var(--color-light-purple)"}/>
        <Contex beforeLabel={"هزاران"} afterLabel={"برتر اکنون در یک مکان"} text={"دوره"}/>
      </div>
    </div>
  )
}

export default AboutSection
// برای قسمتیه که نوشته 
//درباره ما بیشتر بدانید