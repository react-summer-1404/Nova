import React from "react";
import { ListboxCustom, UserProfile } from "../../../ui";
import { removeToken } from "../../../../hooks/localStorage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SideBar = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-col-center gap-14 h-full p-8 bg-dark-purple ">
      <div className="flex-col-center gap-7">
        <div>
          
          <UserProfile
            imageUrl={data?.currentPictureAddress}
            userName={data?.userName}
            fName={data?.fName}
          />
        </div>
        <div>
          <ListboxCustom />
        </div>
      </div>
      <div className="cursor-pointer text-black hover:text-white"
        onClick={() => {
          removeToken();
          navigate("/");
          toast.error("از حساب خود خارج شدید")
        }}
      >
        خروج از حساب
      </div>
    </div>
  );
};

export default SideBar;
