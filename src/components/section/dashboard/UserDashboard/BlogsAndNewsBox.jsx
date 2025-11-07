import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import NewsNotifictionTable from "./NewsNotifictionTable";

const BlogsAndNewsBox = () => {
  return (
    <div className="w-full h-[180px] px-8 py-5 flex-right bg-soft-indigo relative rounded-[10px]">
      <IoIosNotificationsOutline className="notifiction-Icon rounded-[10px]" />
      <div className="w-full flex flex-col gap-3 text-right">
        <h4 className="text-[20px] text-navy font-semibold gap-5">جدیدترین اخبار و مقالات</h4>
        <NewsNotifictionTable newsReleaseTime={"۱۴۰۴ / ۱۱ / ۳۰"} newsTitle={"دوره آموزش جامع از پایه تا پیشرفته Next.js منتشر شد. "}/>
        <NewsNotifictionTable />
        <NewsNotifictionTable />
      </div>
      
    </div>
  );
};

export default BlogsAndNewsBox;
