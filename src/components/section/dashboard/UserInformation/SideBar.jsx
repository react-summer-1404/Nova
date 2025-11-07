import React from 'react'
import { ListboxCustom, UserProfile } from '../../../ui'
import { FaUserCog } from "react-icons/fa";

const SideBar = ({data}) => {
  return (
    <div className="flex-col-center gap-14 h-full py-8 bg-dark-purple rounded-r-[15px] ">
    <div className="flex-col-center gap-7">
      <div>
        <UserProfile imageUrl={data?.currentPictureAddress} userName={data?.userName} />
      </div>
      <div>
        <ListboxCustom />
      </div>
    </div>
    <div>خروج از حساب</div>
  </div>
  )
}

export default SideBar
