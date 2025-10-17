import React from 'react'
const JoinTheClub = () => {
  return (
    <div className ='w-screen h-[321px] bg-[#5751E1] flex'>
        <div className ='w-[28%] flex'>
          <button className =' w-[30%] h-[48px] rounded-[50px] !bg-[#FFC224] border border-[#141109] shadow-[4px_6px_0px_0px_#3D3D3D]'>
            <p className =' text-[11px] '> اکنون مشترک شوید </p>
          </button>
          <div><img src="src/assets/images/line.png" className='h-full'/></div>
          
        </div>
        
      <div className =' w-[35%] flex flex-col justify-center items-end gap-4'>
          <p className ='text-right text-[24px] text-[#FFFFFF] w-[70%]'>می خواهید از دوره های جدید در جریان باشید؟</p>
          <input
            type="text"
            placeholder='ایمیل خود را تایپ کنید'
            className ='w-[80%] h-[51px] bg-[#4A44D1] border border-[#433EC2] rounded-[50px] placeholder: indent-60 text-[#fff]'
          />
          
        </div>
      <div className =' w-[22%] h-full'>
          <div className ='relative h-[300px]'>
            <img src="src/assets/images/yellowCrescent.png" className ='absolute top-[219px] right-0'></img>
            <img src="src/assets/images/pattern.png" className ='absolute bottom-[85px] left-[64px] w-[20%] h-[20%]' />
            <img src="src/assets/images/man.png" className ='absolute bottom-[-21px] left-[64px] w-[67%] h-[68%]' />
          </div>
        </div>
    </div>
  )
}

export default JoinTheClub
