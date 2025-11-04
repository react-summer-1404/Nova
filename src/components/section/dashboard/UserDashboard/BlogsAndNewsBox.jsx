import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import NewsNotifictionTable from "./NewsNotifictionTable";

const BlogsAndNewsBox = () => {
  return (
    <div className="w-full h-[180px] px-8 py-5 flex-right bg-soft-indigo relative rounded-[10px]">
      <IoIosNotificationsOutline className="notifiction-Icon rounded-[10px]" />
      <div className="w-full flex flex-col gap-3 text-right">
        <h4 className="text-responsive gap-5">جدیدترین اخبار و مقالات</h4>
        <NewsNotifictionTable />
        <NewsNotifictionTable />
        <NewsNotifictionTable />
      </div>
      
    </div>
  );
};

export default BlogsAndNewsBox;
