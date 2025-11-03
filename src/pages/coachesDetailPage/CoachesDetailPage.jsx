import React from "react";
import "../../assets/styles/variable.css";
import { useQuery } from "@tanstack/react-query";
import { getTeachersDetail } from "../../servises/api/teacherDetail";

const CoachesDetailPage = () => {
  // const { data:teacherDetail } = useQuery({
  //   queryKey: "teacherDetail",
  //   queryFn: () => getTeachersDetail(TeacherId),
  // });
  return (
    <div className="w-screen flex justify-center gap-[50px]">
      <div>
        <div
          style={{ backgroundColor: "var(--color-bg-purple)" }}
          className="w-[900px] h-[368px]"
        >
          <img src="/instructor_details_thumb.png.png" className="w-[200px] h-[200px]"/>
          <div style={{color:"var(--color-white)"}}>
            <h2>رابرت</h2>
            <h2>لارول خبره</h2>
              <span>ایمیل</span>
            <p>البته در اکثر سایت‌های حرفه‌ای، از چند زبان برنامه‌نویسی استفاده می‌شود که هر کدام وظیفه خاصی را انجام می‌دهند. زبان HTML از جمله پرکاربردترین زبان‌ها است، که در اکثر سایت‌ها به شکل مستقل یا ترکیبی با سایر زبان‌ها استفاده شده است.</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[280px] h-[570px] bg-amber-200"> side</div>
    </div>
  );
};

export default CoachesDetailPage;
