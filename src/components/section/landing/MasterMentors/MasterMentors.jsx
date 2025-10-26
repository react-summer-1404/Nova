
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CommunicationApp from './CommunicationApp';
import TeacherCard from './TeacherCArd';
import Dummy_teacher from './TeacherData';
import { useQuery } from '@tanstack/react-query';
import { getMasterTeacher } from '../../../../servises/api/landing/masterteacher';
import Loader from '../BlogSection/Loader';
import ErrorMessage from '../BlogSection/ErrorMessage';

const MasterMentors = () => {
  const {data,isError,isLoading,error} = useQuery({
    queryKey : ["topMentor"],
    queryFn : getMasterTeacher
  })
  
  if (isLoading){
    return <Loader/>
  }

  if (isError){
    return <ErrorMessage message={error?.message||"خطای ناشناخته ای رخ داده"}/>
  }

  if (!data || data.length == 0){
    return (
      <div className ='h-[320px] flex items-center justify-center'>
        <p style={{color : "var(--color-text-gray)"}} className ='text-lg'>هیچ معلم برتری ثبت نشده است.</p>
      </div>
    );
  }
  return (
    <div className ='w-screen h-[320px] flex'>
      <div className ='w-4/6 flex justify-end px-6'>
        <div className ='w-[80%] grid grid-cols-2 gap-1 p-1.5'>
          {data?.map(item => (
              <TeacherCard
                key={item.id}
                fullName={item.fullName}
                pictureAddress={item.pictureAddress}
              />
          ))
        }
          {/* {Dummy_teacher.map((item) => (
            <TeacherCard 
              key={item.id}
              name={item.name}
              job={item.job}
              imgUrl={item.imgUrl}
            />
          ))} */}
        </div>
      </div>

      <section className =' w-2/6 flex justify-center items-center '>
        <div className ='w-[52%] text-right'>
          <button className ='w-[35%] h-[20px] rounded-[30px] bg-[#EFEEFE] text-[9px] text-[#5751E1] '>
            معلم های ماهر
          </button>
          <p className ='pt-[10px] text-[#161439] font-[900] text-[22px]'>کلاس برتر ما و مربیان خبره در یک مکان</p>
          <h2 className ='text-[#6D6C80]  pt-[10px] text-[12px]'> 
              هنگامی که یک چاپگر ناشناس یک گالری از نوع و
              کتاب نمونه درهم درست شده باقی نمانده است
              فقط پنج قرن 
          </h2>
          <button
            type="submit"
            className ="!bg-[#5751E1] shadow-[4px_6px_0px_0px_rgba(5,0,113,1)] text-white rounded-full text-responsive flex gap-1 p-1 text-[12px] ml-[112px] mt-[20px]"
          >
            <FaArrowLeft className ='mt-[5px]'/>
            <span>همه مربیان را ببینید</span>
            
          </button>
        </div>
      </section>
      
      
    </div>
  )
}

export default MasterMentors
