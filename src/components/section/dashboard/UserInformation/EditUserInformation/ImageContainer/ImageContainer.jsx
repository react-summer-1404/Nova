import React from 'react'
const ImageContainer = ({Icon,profPic}) => {
  return (
    <div className=" relative overflow-hidden  rounded-full w-[150px] h-[150px]">
    <img src={profPic}/>
  <div className="h-[30px] w-full bg-[#0E0E0E66] absolute bottom-0 flex justify-center items-center cursor-pointer">{Icon}</div>
  </div>
  )
}

export default ImageContainer
