import React from 'react'
import AvatarComponent from '../Avatar/Avatar'

const UserProfile = ({imageUrl,userName}) => {
  return (
    <div className='flex-col-center gap-4'>
      <AvatarComponent src={imageUrl} size={"lg"}/>
      <span className='w-[80px] flex-col-center text-white text-[20px] overflow-ellipsis'>خوش آمدی {userName?userName:"کابر گرامی"}</span>
    </div>
  )
}

export default UserProfile
