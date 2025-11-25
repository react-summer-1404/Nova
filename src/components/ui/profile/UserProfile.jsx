import React from 'react'
import AvatarComponent from '../Avatar/Avatar'

const UserProfile = ({ imageUrl, userName, fName }) => {
  const displayName = fName || userName || "کاربر گرامی";

  return (
    <div className="flex-col-center gap-4">
      <AvatarComponent src={imageUrl} size="lg" />
      <div className="w-[80px] flex-col-center text-white text-lg overflow-ellipsis text-nowrap">
        <span>خوش آمدی</span>
        <span>{displayName}</span>
      </div>
    </div>
  );
};

export default UserProfile;
