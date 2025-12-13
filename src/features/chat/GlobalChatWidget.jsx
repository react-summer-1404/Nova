
// import { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { Modal, ModalHeader, ModalBody, Button } from "@heroui/react";
import Chat from "./Chat";
import ModalSection from "../../components/ui/Modal/ModalSection";
import useToggle from "../../hooks/useToggle";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
export default function GlobalChatWidget() {
  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);

  return (
    <>
      <div className="fixed bottom-30 right-10 rounded-lg z-50  w-[48px] h-[48px] bg-dark-purple dark:bg-Violet-Blue" >
      <ModalSection
        modalTitle="صفحه چت"
        StyleModal={
          " bg-transparent cursor-pointer transition-all ease-in-out"
        }
        Icon={<IoChatbubbleEllipsesOutline className="text-white mr-7 mt-2" size={24}/>}
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpen={toggleModal}
        size="2xl"
        content={<Chat />}
        
      />
    </div>
    </>
  );
}
