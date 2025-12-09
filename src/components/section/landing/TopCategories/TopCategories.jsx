import React from 'react'
import Tag from '../../../ui/Tag/Tag'
import Slider from '../../landing/TopCategories/slider/Slider'
import { useTranslation } from "react-i18next";

const TopCategories = () => {
  const { t } = useTranslation();
  return (
   <div className='section-padding flex-center  w-screen'>
     <div className='flex flex-col  items-center pt-16 gap-4  '>
        <div className='flex flex-col gap-6  items-center'>
      <Tag title={t("topCategories.topCategoriesTag")} textColor={"#5751E1"} bgColor={"#EFEEFE"}/>
      <h2 className=' font-bold md:text-5xl text-3xl text-black'>{t("topCategories.topCategoriesTitle")}</h2>
      <h3 className=' text-responsive text-text-gray'>{t("topCategories.topCategoriesSubtext")}</h3>
    </div>
    <Slider/>
    </div>
   </div>
  )
}

export default TopCategories
