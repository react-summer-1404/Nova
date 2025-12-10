import React from "react";
import first from "../../../../assets/images/first.svg";
import second from "../../../../assets/images/second.svg";
import third from "../../../../assets/images/third.svg";

const MedalSection = ({ data }) => {
  let medalImg = null;
  let medalText = "";

  if(data >= 6) {
    medalImg = third;
    medalText = "عالیه! تو استاد شدی!";
  } else if(data >= 3) {
    medalImg = second;
    medalText = "خوبه! داری کم کم حرفه‌ای میشی!";
  } else if(data >= 1) {
    medalImg = first;
    medalText = "آفرین داری خوب پیش میری، هنوز نوبی!";
  } else {
    medalImg = null;
    medalText = "هنوز شروع نکردی، بیا جلوتر برو!";
  }

  return (
    <div className="flex  w-[80%] justify-between items-center p-3">
      {medalImg && <img className="w-[200px] h-[140px]" src={medalImg} alt="Medal" />}
      <p className="text-[#5B2C6F] font-bold text-3xl w-[300px]  ">{medalText}</p>
    </div>
  );
};

export default MedalSection;
