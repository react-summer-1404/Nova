
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CommunicationApp from './CommunicationApp';
import TeacherCard from './TeacherCArd';
import Dummy_teacher from './TeacherData';

const MasterMentors = () => {
  return (
    <div className ='w-screen h-[320px] flex'>
      <div className ='w-3/5 flex justify-end md:px-6'>
        <div className =' w-[89%] md:w-[80%] grid grid-cols-2 p-4'>
          {Dummy_teacher.map((item) => (
            <TeacherCard 
              key={item.id}
              name={item.name}
              job={item.job}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>

      <div className =' w-2/6 flex justify-center items-center '>
        <div className ='w-[52%] text-right flex flex-col items-end md:gap-4 gap-1'>
          <button style={{color: "var(--color-dark-purple)" ,backgroundColor: "var(--color-light-purple)"}} className ='md:px-5 p-1 px-2.5 rounded-[30px] text-[9px] '>
            معلم های ماهر
          </button>
          <p style={{color : "var(--color-navy)"}} className =' font-[900] text-[18px] md:text-[22px]'>کلاس برتر ما و مربیان خبره در یک مکان</p>
          <h2 style={{color : "var(--color-text-gray)"}} className ='text-[10px] md:text-[12px]'> 
              هنگامی که یک چاپگر ناشناس یک گالری از نوع و
              کتاب نمونه درهم درست شده باقی نمانده است
              فقط پنج قرن 
          </h2>  
          <button
            type="submit"
            style={{color : "var(--color-white)",backgroundColor: "var(--color-dark-purple)"}}
            className =" text-[10px] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] rounded-full flex gap-1 p-1 md:text-[12px]px-4 items-center"
          >
            <FaArrowLeft />
            <span>همه مربیان را ببینید</span>
            
          </button>
        </div>
      </div>
      
      
    </div>
  )
}

export default MasterMentors
