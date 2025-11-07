import React from "react";

const UserInfoBox = ({ label, value }) => {
  return (
    <div className=" justy-between gap-2 text-[16px]">
      <span className="text-dark-purple">{value}</span> : <span className="text-black">{label}</span>
    </div>
  );
};

export default UserInfoBox;
