import React from 'react'
import SocialMedia from "../socialMediaIcon/SocialMedia";
import { FaYoutube ,FaWhatsapp,FaInstagram,FaTwitter ,FaFacebookF} from "react-icons/fa";
const SocialList = () => {
  return (
    <div className="flex gap-2.5">
          <SocialMedia Icon={FaYoutube}/>
          <SocialMedia Icon={FaFacebookF}/>
          <SocialMedia Icon={FaWhatsapp}/>
          <SocialMedia Icon={FaInstagram}/>
          <SocialMedia Icon={FaTwitter}/>
          </div>
  )
}

export default SocialList
