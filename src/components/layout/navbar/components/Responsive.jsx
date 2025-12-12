import React from 'react'
import DrawerComponent from '../../../ui/Drawer/DrawerComponent'
import { IoIosMenu } from "react-icons/io";
import UserCartFavorites from './UserCartFavorites';
import SearchBox from './SearchBox';
import NavbarItems from './NavbarItems';
import AvatarComponent from '../../../ui/Avatar/Avatar';
import { getToken } from '../../../../hooks/localStorage';
import AccountBtn from './AccountBtn';

const Responsive = ({data}) => {
  const token = getToken();

  return (
    <DrawerComponent
    Icon={<IoIosMenu size={30} className="text-dark-purple"/>}
    buttonStyle={"bg-transparent"}
      placementValue={"top"}
      Content={
        <div className="flex flex-col gap-8">
          <div className="flex justify-between ">
            {token ? (
              <AvatarComponent
                src={data?.currentPictureAddress||"/default.png"}
                onclick={() => navigate("/dashboard")}
              />
            ) : (
              <AccountBtn onclick={() => navigate("/auth")} />
            )}
            <UserCartFavorites  />
          </div>
          <SearchBox />
          <NavbarItems />
        </div>
      }
    />
  )
}

export default Responsive
