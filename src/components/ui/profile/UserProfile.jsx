import React from 'react'

const UserProfile = ({imageUrl,userName}) => {
  return (
    <div className='flex-col-center gap-4'>
      <img className='w-[80px] rounded-[60px]' src={imageUrl} alt="user image" />
      <span className='text-white text-[20px]'>خوش آمدی {userName}</span>
    </div>
  )
}

export default UserProfile
