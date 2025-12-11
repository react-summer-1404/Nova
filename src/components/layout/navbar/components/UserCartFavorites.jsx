import React, { useEffect, useState } from "react";
import shopIcon from "../../../../assets/images/shop.svg";
import { IoLanguageOutline } from "react-icons/io5";
import faveIcon from "../../../../assets/images/favorite.svg";
// import useFavorite from "../../../core/store/favoriteStore";
import useFavorite from "../../../../core/store/favoriteStore";
import { Link } from "react-router-dom";
import useNewsFavorite from "../../../../core/store/newsFavoriteStore";
import { useTranslation } from "react-i18next";

const UserCartFavorites = () => {
  const { i18n } = useTranslation();
  const { addedToFavorite } = useFavorite();
  const { addedNewsToFavorite } = useNewsFavorite();
  const [lanNotif,setLanNotif] = useState("fa")
  
  const handleChangeLan = () => {
    const newLan = lanNotif === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLan);
    setLanNotif(newLan);
  };

  return (
    <>
      <div className="flex gap-6 z-20">
        <div
          className="relative flex items-center justify-center  xl:w-[40px] md:w-[35px]"
          onClick={handleChangeLan}
        >
          <IoLanguageOutline size={32} className="text-text-gray" />
          <div className=" min-w-[22px] min-h-[22px] rounded-full absolute -top-2 -right-1 leading-none flex-center bg-golden-yellow">
            {lanNotif === "fa" ? "fa" : "en"}
          </div>
        </div>

        <Link to={"/dashboard/favorite"}>
          <div className=" relative flex items-end xl:w-[40px] md:w-[35px] ">
            <img src={faveIcon}></img>
            <div className=" min-w-[22px] min-h-[22px] rounded-full absolute -top-2 -right-1 leading-none flex-center bg-golden-yellow">
              {addedToFavorite.length + addedNewsToFavorite.length}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserCartFavorites;
