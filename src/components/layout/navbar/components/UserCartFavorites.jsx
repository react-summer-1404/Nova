import React from "react";
import shopIcon from "../../../../assets/images/shop.svg";
import faveIcon from "../../../../assets/images/favorite.svg";
const UserCartFavorites = ({isOpen}) => {

  return (
    <>
      <div className={`${isOpen ? "flex gap-6 z-20" : "hidden"} md:flex md:gap-3`}>
        <div className="relative flex items-end  min-w-[40px]">
          <img src={shopIcon}></img>
          <div
            style={{ backgroundColor: "var(--color-golden-yellow)" }}
            className=" min-w-[22px] min-h-[22px]  rounded-full absolute -top-2 -right-1 leading-none text-center"
          >
            0
          </div>
        </div>

        <div className=" relative flex items-end min-w-[40px] ">
          <img src={faveIcon}></img>
          <div
            style={{ backgroundColor: "var(--color-golden-yellow)" }}
            className=" min-w-[22px] min-h-[22px] rounded-full absolute -top-2 -right-1 leading-none text-center"
          >
            0
          </div>
        </div>
      </div>
     
    </>
  );
};

export default UserCartFavorites;
