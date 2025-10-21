import React from 'react'
const JoinTheClub = () => {
  return (
    <div className ='w-screen h-[321px] bg-[#5751E1] flex flex-row'>
        <img src="src/assets/images/line.png" />
        
      <div className ='w-1/2 pt-[154px]'>
          <p className =' text-[24px] leading-[70.2px] tracking-[0%] text-right items-center text-[#FFFFFF]'>می خواهید از دوره های جدید در جریان باشید؟</p>
          <input
            type="text"
            placeholder='ایمیل خود را تایپ کنید'
            className ='w-[411px] h-[51px] bg-[#4A44D1] float-right border border-[#433EC2] rounded-[50px] placeholder: text-[#fff] indent-[20px]'
          />
          <button className ='z-10 w-[130px] h-[48px] !rounded-[50px] !bg-[#FFC224] border border-[#141109] shadow-[4px_6px_0px_0px_#3D3D3D] '>
            <p className =' font-sans text-[11px] font-normal leading-[32.2px] tracking-[0%] text-right '> اکنون مشترک شوید </p>
          </button>
        </div>
      <div className ='w-1/3 h-full'>
          <div className ='relative w-[300px] h-[300px]'>
            <img src="src/assets/images/yellowCrescent.png" className ='absolute top-[219px] right-0'></img>
            <img src="src/assets/images/pattern.png" className ='absolute bottom-[85px] left-[64px] w-[20%] h-[20%]' />
            <img src="src/assets/images/man.png" className ='absolute bottom-[-21px] left-[64px] w-[67%] h-[68%]' />
          </div>
        </div>
    </div>
  )
}

export default JoinTheClub
