import React from 'react'
import BlueButton from "../../../ui/button/BlueButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import SimpleInput from '../../../ui/SimpleInput/SimpleInput';
import TextArea from '../../../ui/TextArea/TextArea';

function ContactTeacher() {
  return (
    <div className="lg:w-[280px] h-[600px] w-full flex flex-col gap-5  p-6 shadow-[0_0_14px_0_rgba(0,0,0,0.08)] rounded-[10px] border border-[#DFDFDF]">
    <div className=" text-right flex flex-col gap-3">
      <h2 className="font-semibold text-[20px]">تماس سریع</h2>
      <h3 style={{color:"var(--color-text-gray)"}} className="text-base">
        از طریق تماس با ما راحت باشید اگر ترجیح می دهید توییتر یا فیس بوک!
      </h3>
    </div>
    <div className="flex flex-col gap-3" dir="rtl">
      <SimpleInput type={"text"} label={"نام"}/>
      <SimpleInput type={"Email"} label={"پست الکترونیک"}/>
      <SimpleInput type={"text"} label={"موضوع"}/>
      <SimpleInput type={"number"} label={"تلفن"}/>
      <TextArea/>
    </div>
    <div className='hidden lg:block'>
    <BlueButton height={"50px"} content={"پیام فرستادن"} BtnIcon={<FaArrowLeftLong color="var(---color-white)"/>} />

    </div>
  </div>
  )
}

export default ContactTeacher
