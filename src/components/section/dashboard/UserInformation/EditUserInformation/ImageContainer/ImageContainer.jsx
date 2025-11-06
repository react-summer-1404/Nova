import React from 'react'
import UserProfModal from '../UserProfModal/UserProfModal'
const ImageContainer = ({Icon,profPic}) => {
  return (
    <div className=" relative overflow-hidden  rounded-full w-[150px] h-[150px]">
    <img src={profPic}/>
  {/* <div className="h-[30px] w-full bg-[#0E0E0E66] absolute bottom-0 flex justify-center items-center cursor-pointer">{Icon}</div>
   */}
   <UserProfModal icon={Icon}>
    <input type='file' />
   </UserProfModal>
  </div>
  )
}

export default ImageContainer
