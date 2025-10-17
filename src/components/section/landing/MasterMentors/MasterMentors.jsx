
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CommunicationApp from './CommunicationApp';
import TeacherCard from './TeacherCArd';
import Dummy_teacher from './TeacherData';

const MasterMentors = () => {
  return (
    <div className ='w-screen h-[320px] flex'>
      <div className ='w-3/5 flex justify-end px-6'>
        <div className ='w-[80%] grid grid-cols-2 p-4'>
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
        <div className ='w-[52%] text-right flex flex-col items-end gap-4'>
          <button className ='px-5 p-1 rounded-[30px] bg-[#EFEEFE] text-[9px] text-[#5751E1] '>
            معلم های ماهر
          </button>
          <p className =' text-[#161439] font-[900] text-[22px]'>کلاس برتر ما و مربیان خبره در یک مکان</p>
          <h2 className ='text-[#6D6C80] text-[12px]'> 
              هنگامی که یک چاپگر ناشناس یک گالری از نوع و
              کتاب نمونه درهم درست شده باقی نمانده است
              فقط پنج قرن 
          </h2>  
          <button
            type="submit"
            className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive flex gap-1 p-1 text-[12px] "
          >
            <FaArrowLeft className ='mt-[5px]'/>
            <span>همه مربیان را ببینید</span>
            
          </button>
        </div>
      </div>
      
      
    </div>
  )
}

export default MasterMentors
