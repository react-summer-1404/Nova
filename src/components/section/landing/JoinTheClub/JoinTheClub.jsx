import React from 'react'
const JoinTheClub = () => {
  return (
    <div  style={{backgroundColor: "var(--color-dark-purple)"}} className ='w-screen md:h-[321px] flex h-[280px]'>
        <div className ='w-[28%] flex'>
          <button  style={{backgroundColor: "var(--color-golden-yellow)"}} className =' w-[30%] h-[48px] rounded-[50px] border border-[#141109] shadow-[4px_6px_0px_0px_#3D3D3D]'>
            <p className =' text-[11px] '> اکنون مشترک شوید </p>
          </button>
          <div><img src="src/assets/images/line.png" className='h-full'/></div>
          
        </div>
        
      <div className =' w-[35%] flex flex-col justify-center items-end gap-4'>
          <p style={{color: "var(--color-white)"}} className ='text-right text-[18px] text-[#FFFFFF] w-[80%] md:text-[24px] md:w-[70%]'>می خواهید از دوره های جدید در جریان باشید؟</p>
          <input
            type="text"
            placeholder='ایمیل خود را تایپ کنید'
            className ='md:w-[80%] md:h-[51px] h-[33px] w-[77%] bg-[#4A44D1] border border-[#433EC2] rounded-[50px] placeholder: text-[14px] md:indent-60 indent-14 text-[#fff]'
          />
          
        </div>
      <div className =' w-[22%] h-full'>
          <div className ='relative h-[280px] md:h-[300px]'>
            <img src="src/assets/images/yellowCrescent.png" className ='absolute top-[232px] md:top-[219px] right-[-29px] '></img>
            <img src="src/assets/images/pattern.png" className ='absolute md:bottom-[85px] md:left-[64px] left-[69px] bottom-[106px] w-[20%] h-[20%]' />
            <img src="src/assets/images/man.png" className ='absolute w-[100%] h-[70%] left-[60px] bottom-[0px] md:bottom-[-21px] md:left-[64px] md:w-[67%] md:h-[68%] md:object-cover' />
          </div>
        </div>
    </div>
  )
}

export default JoinTheClub
