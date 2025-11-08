import React from 'react'
import Tag from '../../../ui/Tag/Tag'
import Slider from '../../landing/TopCategories/slider/Slider'

const TopCategories = () => {
  return (
   <div className='section-padding flex-center  w-screen'>
     <div className='flex flex-col  items-center pt-16 gap-4  '>
        <div className='flex flex-col gap-6  items-center'>
      <Tag title={"دسته بندی های پرطرفدار"} textColor={"#5751E1"} bgColor={"#EFEEFE"}/>
      <h2 className=' font-bold md:text-5xl text-3xl text-black'>دسته بندی های برتر</h2>
      <h3 className=' text-responsive text-text-gray'> امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است</h3>
    </div>
    <Slider/>
    </div>
   </div>
  )
}

export default TopCategories
