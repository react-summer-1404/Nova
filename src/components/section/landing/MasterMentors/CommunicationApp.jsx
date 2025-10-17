import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import IconWrapper from './IconWrapper'

const CommunicationApp = () => {
    return (
        <div className ='flex gap-1' >
            <IconWrapper><FaInstagram style={{color : "var(--color-dark-gray)"}} size={12}/></IconWrapper>
            <IconWrapper><FaWhatsapp style={{color : "var(--color-dark-gray)"}} size={12}/></IconWrapper>   
            <IconWrapper><FaTwitter style={{color : "var(--color-dark-gray)"}} size={12}/></IconWrapper>        
            <IconWrapper><FaFacebook style={{color : "var(--color-dark-gray)"}} size={12}/></IconWrapper>
        </div>
    )
}

export default CommunicationApp