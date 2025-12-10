import { Modal, ModalBody, ModalHeader } from '@heroui/react';
import React, { useState } from 'react'
import { FaRegMessage } from 'react-icons/fa6';
import Chat from './Chat';

export default function GlobalChatWidget () {
    const [open, setOpen] = useState(false);
  return (
    <>
        <div className="flex gap-4 items-center fixed bottom-111 right-30 z-50">
            <Button 
                onClick = {() => setOpen(true)}
                style={{ display: visible ? "flex" : "none" }}
                isIconOnly
                aria-label="Like"
                className="w-[48px] h-[48px]  bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out "
            >
                <FaRegMessage  className="text-white" size={20} />
            </Button>
        </div>

        <Modal isOpen={open} onClose={() => setOpen(false)} size="lg">
            <ModalHeader className="bg-green-500 text-white">
                چت انلاین
            </ModalHeader>
            <ModalBody className='p-4'>
                <Chat/>
            </ModalBody>
        </Modal>
    </>
  )
}
