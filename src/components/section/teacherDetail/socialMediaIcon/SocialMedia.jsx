import React from 'react'

const SocialMedia = ({Icon}) => {
  return (
      <div style={{backgroundColor:"var(--color-white)"}} className="rounded-full w-[42px] h-[42px] flex-center cursor-pointer">
              <Icon size={18} color="var(--color-dark-purple)"/>
          </div>
  )
}

export default SocialMedia
