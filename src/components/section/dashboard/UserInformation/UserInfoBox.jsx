import React from "react";

const UserInfoBox = ({ label, value }) => {
  return (
    <div className="  gap-2 lg:text-base text-sm  flex-col-reverse md:flex-row flex text-right w-[150px] md:w-fit ">
      <span className="text-dark-purple truncate">{value}</span> 
      <span className="text-black whitespace-nowrap">{` : ${label} `}</span>
    </div>
  );
};

export default UserInfoBox;
