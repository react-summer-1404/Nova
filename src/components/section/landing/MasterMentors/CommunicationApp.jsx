import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import IconWrapper from './IconWrapper'
import "../../../../assets/styles/variable.css"

const CommunicationApp = () => {
    return (
        <div className ='flex gap-1' >
            <IconWrapper><FaInstagram style={{color : "var(--color-text-gray2)"}}  size={18}/></IconWrapper>
            <IconWrapper><FaWhatsapp style={{color : "var(--color-text-gray2)"}}  size={18}/></IconWrapper>   
            <IconWrapper><FaTwitter style={{color : "var(--color-text-gray2)"}} size={18}/></IconWrapper>        
            <IconWrapper><FaFacebook style={{color : "var(--color-text-gray2)"}} size={18} /></IconWrapper>
        </div>
    )
}

export default CommunicationApp