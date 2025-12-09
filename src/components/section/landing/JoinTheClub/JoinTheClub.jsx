import React from 'react'
import { motion } from "framer-motion";
import { scrollVariant } from '../../../../configs/frameMorion/Scroll';
import { useTranslation } from "react-i18next";

const JoinTheClub = () => {
  const { t } = useTranslation();
  return (
    <div className ='bg-dark-purple w-screen lg:h-[321px] h-[240px] flex sm:h-[280px]'>
        <div className ='w-[28%] flex'>
          
          <div><img src="src/assets/images/line.png" className='h-full'/></div>
          
        </div>
        
      <motion.div className =' w-[35%] flex flex-col justify-center relative items-end gap-4'
      variants={scrollVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
          <p className ='text-right text-[22px] text-[#fff] w-[100%] md:text-[34px] md:w-[70%]'>{t("joinTheClub.joinTheClubTitle")}</p>
          <input
            type="text"
            placeholder={t("joinTheClub.joinTheClubInputPlaceholder")}
            className ='lg:w-[80%] lg:h-[51px] h-[30px] sm:h-[33px] sm:w-[77%] w-[100%] bg-[#4A44D1] border border-[#433EC2] rounded-[50px] placeholder: lg:text-[14px] text-[8px] sm:text-[10px] lg:indent-60 sm:indent-16 indent-10 text-[#fff]'
          />
          <button  className ='bg-golden-yellow lg:w-[35%] lg:h-[48px] absolute lg:bottom-[80px] sm:bottom-[81px] bottom-[65px] sm:h-[35px] sm:w-[47%] w-[50%] lg:right-[500px] right-[145px] sm:right-[210px] rounded-[50px] border border-[#141109] shadow-[4px_6px_0px_0px_#3D3D3D]'>
            <p style={{color: "var(--color-blue-fot)"}}className ='text-[8px] sm:text-[10px] lg:text-[14px] font-[600]'> {t("joinTheClub.joinTheClubButton")} </p>
          </button>
        </motion.div>
      <motion.div className =' w-[22%] h-full'
      variants={scrollVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}>
          <div className ='relative h-[280px] md:h-[300px]'>
            <img src="src/assets/images/yellowCrescent.png" className ='absolute top-[213px] sm:top-[232px] lg:top-[219px] right-[-39px]'></img>
            <img src="src/assets/images/pattern.png" className ='absolute lg:bottom-[85px] lg:left-[64px] left-[29px] bottom-[105px] sm:w-[20%] sm:h-[20%] w-[25%]' />
            <img src="src/assets/images/man.png" className ='absolute sm:w-[100%] sm:h-[70%] sm:left-[60px] sm:bottom-[0px] lg:bottom-[-21px] bottom-[40px] h-[140px] right-[-30px] lg:left-[64px] lg:w-[67%] lg:h-[68%] sm:object-cover' />
          </div>
        </motion.div>
    </div>
  )
}

export default JoinTheClub