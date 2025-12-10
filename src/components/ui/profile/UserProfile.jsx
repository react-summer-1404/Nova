import React from "react";
import AvatarComponent from "../Avatar/Avatar";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { getMultiAccount } from "../../../servises/api/accountApi";

const UserProfile = ({ imageUrl, userName, fName }) => {
  const displayName = fName || userName || "کاربر گرامی";
  const { data } = useQuery({
    queryKey: ["getUserAccount"],
    queryFn: getMultiAccount,
  });
console.log("full data", data);

  return (
    <div className="flex-col-center gap-4  ">
      <AvatarComponent src={imageUrl} size="lg" />
      <div className="w-[80px] flex-col-center text-white text-lg overflow-ellipsis text-nowrap">
        <span>خوش آمدی</span>
        <span>{displayName}</span>
      </div>
      {/* <div className=" w-full">
        <Accordion>
          <AccordionItem
            style={{ direction: "rtl" }}
            key="1"
            title="حساب های کاربری"
          >
            <div className="flex justify-start items-start flex-col border h-fit gap-5">
              <span className="w-[40px] h-[20px] text-4xl text-white cursor-pointer ">
                +
              </span>
              {data?.accounts?.map((item) => {
                return (
                  <div key={item.id} className="mr-2 flex gap-4 text-white">
                    <AvatarComponent
                      src={item.currentPictureAddress||"/default.png"}
                      size="sm"
                    />
                    <span>{item.fName || "کاربر بدون نام"}</span>
                    <div>{item.id}</div>
                  </div>
                );
              })}
            </div>
          </AccordionItem>
        </Accordion>
      </div> */}
    </div>
  );
};

export default UserProfile;
