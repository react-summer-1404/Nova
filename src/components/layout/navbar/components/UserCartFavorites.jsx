import React from 'react'
import shopIcon from "../../../../assets/images/shop.svg";
import faveIcon from "../../../../assets/images/favorite.svg"
import { IoIosMenu } from "react-icons/io";
const UserCartFavorites = () => {
  return(
   <>
 <div className="md:flex gap-3 hidden">
    <div className ="relative flex items-end  min-w-[40px]">
      <img src={shopIcon} ></img>
      <div style={{backgroundColor:"var(--color-golden-yellow)"}}className =" min-w-[22px] min-h-[22px]  rounded-full absolute -top-2 -right-1 leading-none text-center">0</div>
    </div>

    <div className =" relative flex items-end min-w-[40px] ">
      <img src={faveIcon} ></img>
      <div style={{backgroundColor:"var(--color-golden-yellow)"}} className =" min-w-[22px] min-h-[22px] rounded-full absolute -top-2 -right-1 leading-none text-center">0</div>
    </div>

  </div>
  <IoIosMenu fontSize={"40px"} color='#5751E1' className='md:hidden cursor-pointer'/>

  </>
   
  )
}

export default UserCartFavorites
