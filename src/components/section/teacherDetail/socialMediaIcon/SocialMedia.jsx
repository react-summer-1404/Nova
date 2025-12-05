import React from 'react'

const SocialMedia = ({Icon}) => {
  return (
      <div  className="rounded-full w-[42px] h-[42px] flex-center cursor-pointer bg-white">
              <Icon size={18} className="text-dark-purple" />
          </div>
  )
}

export default SocialMedia
