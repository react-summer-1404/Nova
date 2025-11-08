import React from 'react'

const UserProfile = ({imageUrl,userName}) => {
  return (
    <div className='flex-col-center gap-4'>
      <img className='w-[80px] rounded-[60px]' src={imageUrl} alt="user image" />
      <span className='w-[80px] flex-col-center text-white text-[20px] overflow-ellipsis'>خوش آمدی {userName?userName:"کابر گرامی"}</span>
    </div>
  )
}

export default UserProfile
