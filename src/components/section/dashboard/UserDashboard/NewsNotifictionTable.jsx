import React from "react";

const NewsNotifictionTable = () => {
  return (
    <div className=" flex justify-between items-center">
      <span className="text-[13px]">۱۴۰۴ / ۱۱ / ۳۰</span>
      <div className="flex justify-between gap-2.5">
        <span className="text-red-600 text-[14px]">جدید</span>
        <span>دوره آموزش جامع از پایه تا پیشرفته Next.js منتشر شد. </span>{" "}
      </div>
    </div>
  );
};

export default NewsNotifictionTable;
