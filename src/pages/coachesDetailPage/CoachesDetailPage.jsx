import React from "react";
import "../../assets/styles/variable.css";
import "../../assets/styles/global.css";
import { useQuery } from "@tanstack/react-query";
import { getTeachersDetail } from "../../servises/api/teacherDetail";
import SocialList from "../../components/section/teacherDeatail/socialList/SocialList";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useParams } from "react-router-dom";


const CoachesDetailPage = () => {
  // const {teacherId} =useParams();
  const TeacherId = 1;
  const { data:teacherDetail } = useQuery({
    queryKey: ["teacherDetail",TeacherId],
    queryFn: () => getTeachersDetail(TeacherId),
  });
  return (
    <div className="w-screen flex justify-center gap-[50px]" >
      <div>
        <div
          style={{ backgroundColor: "var(--color-bg-purple)" }}
          className="xl:w-[900px] xl:h-[368px] p-[50px] flex items-center gap-[40px]"
          dir="rtl"
        >
          <img src={teacherDetail?.pictureAddress} className="w-[200px] h-[200px] rounded-full"/>
          <div style={{color:"var(--color-white)"}} className="flex flex-col gap-4 items-start">
            <h2 className="font-semibold text-2xl">{teacherDetail?.fullName}</h2>
            <h3>لاراول پرو خبره</h3>
              <div className="flex gap-2 items-center text-responsive">
              <MdOutlineEmail size={20}/>
              <Link><span>{teacherDetail?.linkdinProfileLink}</span></Link>
              </div>
            <p className="text-right">البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</p>
          <SocialList/>
          </div>
        </div>
      </div>
      <div className="w-[280px] h-[570px] bg-amber-200"> side</div>
    </div>
  );
};

export default CoachesDetailPage;
