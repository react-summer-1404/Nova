import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const CommunicationApp = () => {
    return (
        <div className ='grid grid-cols-4 gap-2 justify-items-center' >
                <div className ='flex justify-center w-6 h-6 rounded-[25px] border !border-[#9292B4] shadow-[2px_3px_0px_0px_#00000040] items-center'>
                    <FaInstagram size={15}/>
                </div>

                <div className ='flex justify-center w-6 h-6 rounded-[25px] border !border-[#9292B4] shadow-[2px_3px_0px_0px_#00000040] items-center'>
                    <FaWhatsapp  size={15}/>
                </div>

                <div className ='flex justify-center w-6 h-6 rounded-[25px] border !border-[#9292B4] shadow-[2px_3px_0px_0px_#00000040] items-center'>
                    <FaTwitter size={15}/>
                </div>
                <div className ='flex justify-center w-6 h-6 rounded-[25px] border !border-[#9292B4] shadow-[2px_3px_0px_0px_#00000040] items-center'>
                    <FaFacebook size={15}/>
                </div>
        </div>
    )
}

export default CommunicationApp