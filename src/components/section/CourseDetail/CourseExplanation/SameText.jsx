import React from 'react'
import YellowButton from '../../../ui/button/YellowButton'
import {GoChevronLeft} from "react-icons/go";
const SameText = ({title}) => {
  return (
    <div className ='flex gap-3.5 items-center'>        
        <h3 className ='font-[600] text-[16px] text-[#161439]'> {title}</h3>
        <YellowButton icon={<GoChevronLeft className="-m-2.5"/>}/>
    </div>
  )
}

export default SameText