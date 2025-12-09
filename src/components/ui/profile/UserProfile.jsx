import React from "react";
import AvatarComponent from "../Avatar/Avatar";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/react";

const UserProfile = ({ imageUrl, userName, fName }) => {
  const displayName = fName || userName || "کاربر گرامی";

  return (
    <div className="flex-col-center gap-4  ">
      <AvatarComponent src={imageUrl} size="lg" />
      <div className="w-[80px] flex-col-center text-white text-lg overflow-ellipsis text-nowrap">
        <span>خوش آمدی</span>
        <span>{displayName}</span>
      </div>
      <div className=" w-full">
        <Accordion>
          <AccordionItem
            style={{ direction: "rtl" }}
            key="1"
            title="حساب های کاربری"
          >
            <div className="flex justify-start items-start flex-col border h-fit gap-4" >
              <span className="w-[40px] h-[20px] text-3xl text-white ">
                +
              </span>
              <AvatarComponent src={imageUrl} size="sm" />
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default UserProfile;
