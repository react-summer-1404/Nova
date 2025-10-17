import React from 'react'
import Logo from '../../ui/Logo/Logo'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube ,FaGooglePlay,FaApple} from 'react-icons/fa'

const Footer = () => {
  return (
    <div style={{ backgroundColor : "var(--color-dark-blue)" }} className ='flex flex-col items-center justify-center w-screen h-[560px]'>
      <div className ='w-[80%] h-[500px] flex items-center justify-center'>
        <div className ='w-[22%] h-[250px] flex flex-col items-end gap-3'>
          <div style={{color: "var(--color-white)"}} className ='flex flex-col gap-3 items-end'>
            <p className ='font-[600] text-[18px]'> در تماس باشید</p>
            <div style={{color: "var(--color-dark-purple)"}} className ='border-b-[3px] w-[32%]'></div>
          </div>
          <div className ='text-right flex flex-col gap-3 w-[85%]'>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse'>
            هنگامی که یک چاپگر ناشناس گرفت
            نوع گالی و درهم
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse gap-2 '> 
              <FaYoutube /> <FaInstagram/> <FaWhatsapp/> <FaTwitter/> <FaFacebook/>   
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse gap-2'>  
              <div style={{backgroundColor: "var(--color-blue-fot)"}} className ='w-[48%] h-[31px] flex items-center '>
              <FaApple className ='ml-[3px]'/>
                <div className ='flex flex-col items-start ml-[7px] w-[80%] text-left'>
                    <div className ='font-[400] text-[7px] '>Download on the</div>
                    <div className ='font-[400] text-[9px] '>Apple Store</div>
                </div>
              </div>
              
              <div style={{backgroundColor: "var(--color-blue-fot)"}} className ='w-[48%] h-[31px] flex items-center '>
                <FaGooglePlay className ='ml-[4px]'/>
                <div className ='flex flex-col items-start ml-[7px] w-[80%] text-left'>
                  <div className ='font-[400] text-[7px] '>Get it on</div>
                  <div className ='font-[400] text-[9px]'>Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className ='w-[22%] h-[250px] flex flex-col items-end gap-3'>
          <div style={{color: "var(--color-white)"}} className ='flex flex-col gap-3 items-end'>
            <p className ='font-[600] text-[18px]'> شرکت ما </p>
            <div style={{color: "var(--color-dark-purple)"}} className ='border-b-[3px] w-[52%]'></div>
          </div>
          <div className ='text-right flex flex-col gap-3 w-[85%]'>
            <div style={{color: "var(--color-text2-fot)"}} className =' font-[500] text-[15px flex flex-row-reverse'> 
            با ما تماس بگیرید
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse '> 
            معلم شوید
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse'>وبلاگ </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px]  flex flex-row-reverse '> 
            مربی
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse '> 
            مناسبت ها
            </div>
          </div>
        </div>
        <div className ='w-[22%] h-[250px] flex flex-col items-end'>
          <div style={{color: "var(--color-white)"}} className ='flex flex-col gap-3 items-end'>
            <p className ='font-[600] text-[18px]'>لینک های مفید</p>
            <div style={{color: "var(--color-dark-purple)"}} className ='border-b-[3px] w-[32%]'></div>
          </div>
          <div className ='text-right flex flex-col gap-3 w-[85%]'>
            <div style={{color: "var(--color-text2-fot)"}} className ='mt-[7px] font-[500] text-[15px] flex flex-row-reverse'> 
              ارزش های ما
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse '> 
            شریک شدن
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse'>شرکای ما </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse '> 
            در Future Learn کار کنید
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse '> 
            Quizlet Plus
            </div>
          </div>
        </div>
        <div className ='w-[22%] h-[250px] flex flex-col items-end gap-2'>
          <div style={{color: "var(--color-white)"}} className ='mt-[-8px]'>
            <Logo />
          </div>
          <div className ='text-right flex flex-col gap-3 w-[85%]'>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse'>هنگامی که یک چاپگر ناشناخته گالی از
              را تایپ کرده و آن را درهم می‌زنید تا نمونه‌ای بسازد
              کتابت دارد.
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse '> 
            استان مازندران، علیوک، جاده فرح آباد، H3X7+5V3، ایران
            </div>
            <div style={{color: "var(--color-text2-fot)"}} className ='font-[500] text-[15px] flex flex-row-reverse'>+98 9999999999</div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor : "var(--color-light-blue)" }} className ='w-full h-[60px] flex justify-center items-center'>
        <p style={{color : "var(--color-text-fot)" }} className ='font-[400] text-[16px] '>© تمامی حقوق این سایت متعلق به تیم نامبر وان می باشد.</p>
      </div>
    </div>
  )
}

export default Footer
