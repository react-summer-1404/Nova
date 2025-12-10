import React from "react";
import quote from "../../../assets/icons/qutation.svg";
import AvatarComponent from "../../../components/ui/Avatar/Avatar";
import star from "../../../assets/icons/star2.svg";
const Comments = ({ name, profile }) => {
  return (
    <div className="bg-light-purple  rounded-[10px] flex-center p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <img src={quote} className="w-[45px] h-[45px]" />

          <div className="flex gap-3">
            <div className="flex flex-col gap-2 items-end text-right">
              <div className="flex gap-0.5">
                <img src={star} className="w-[17px] h-[15px]" />
                <img src={star} className="w-[17px] h-[15px]" />
                <img src={star} className="w-[17px] h-[15px]" />
                <img src={star} className="w-[17px] h-[15px]" />
                <img src={star} className="w-[17px] h-[15px]" />
              </div>
              <span className="font-semibold">{name}</span>
            </div>
            <AvatarComponent src={profile} />
          </div>
        </div>
        <p className="text-right text-text-gray">
          سایت بسیار کاربرپسند و آسان برای ناوبری است، به راحتی می‌توان تمام
          اطلاعات مورد نیاز را پیدا کرد.
        </p>
      </div>
    </div>
  );
};

export default Comments;
