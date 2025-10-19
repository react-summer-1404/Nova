import React from 'react'
import { AccentText } from '../../../../components/ui/index'
import AuthImage from "../../../../assets/images/authimg.svg"

const SideContent = () => {
  return (
    <div className='w-full px-12 p-2 flex flex-col'>
      <AccentText title={"یادگیری"} beforeLabel={"هرگز از"} afterLabel={"دست نکشید زندگی هرگز از آموزش دست نمی کشد"} />
      <div className='w-full flex justify-start'>
        <img src={AuthImage} alt="authImage" className='w-[320px] h-[320px]' />
      </div>
    </div>
  )
}

export default SideContent
