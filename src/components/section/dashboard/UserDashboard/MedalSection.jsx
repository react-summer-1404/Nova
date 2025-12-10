import React from 'react'
import first from "../../../../assets/images/1st-prize-icon.svg"
import second from "../../../../assets/images/2nd-prize-icon.svg"
import third from "../../../../assets/images/3rd-prize-icon.svg"
const MedalSection = () => {
  return ( 
    <div className='w-full border flex-center'>
      <img className='w-[200px] h-[150px]' src={first}/>
    </div>
  )
}

export default MedalSection
