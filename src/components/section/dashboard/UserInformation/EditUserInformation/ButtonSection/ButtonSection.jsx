import React from 'react'
import  YellowButton  from "../../../../../ui/button/YellowButton";
import Tag from "../../../../../ui/Tag/Tag";
import { FiXCircle } from "react-icons/fi";
import { IoSaveOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ButtonSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3">
       <YellowButton text={"ذخیره تغییرات"} width={"160px"} height={"35px"} icon={<IoSaveOutline size={18}/>} type={"submit"} onClick={()=>navigate("/dashboard/userinformation")}/>
            <Tag title={"لغو تغییرات"} width={"120px"} height={"35px"} icon={<FiXCircle size={18}/>} bgColor={"#F5F5F5"} onClick={()=>{
              navigate("/dashboard/userinformation")
            }}/>
    </div>
  )
}

export default ButtonSection
