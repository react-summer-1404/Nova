import React from "react";
import shopIcon from "../../../../assets/images/shop.svg";
import faveIcon from "../../../../assets/images/favorite.svg";
// import useFavorite from "../../../core/store/favoriteStore";
import useFavorite from "../../../../core/store/favoriteStore"
import { Link } from "react-router-dom";
import useNewsFavorite from "../../../../core/store/newsFavoriteStore";
const UserCartFavorites = () => {
  const { addedToFavorite } = useFavorite();
  const { addedNewsToFavorite } = useNewsFavorite();

  return (
    <>
      <div
        className= "flex gap-6 z-20"
      >
        <div className="relative flex items-end  xl:w-[40px] md:w-[35px]">
          <img src={shopIcon}></img>
          <div
            className=" min-w-[22px] min-h-[22px]  rounded-full absolute -top-2 -right-1 leading-none flex-center bg-golden-yellow"
          >
            0
          </div>
        </div>

      <Link to={"/dashboard/favorite"}>
      <div className=" relative flex items-end xl:w-[40px] md:w-[35px] ">
          <img src={faveIcon}></img>
          <div
            className=" min-w-[22px] min-h-[22px] rounded-full absolute -top-2 -right-1 leading-none flex-center bg-golden-yellow"
          >
            {addedToFavorite.length + addedNewsToFavorite.length}
          </div>
        </div></Link>
      </div>
    </>
  );
};

export default UserCartFavorites;
