
// import { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { Modal, ModalHeader, ModalBody, Button } from "@heroui/react";
import Chat from "./Chat";
import ModalSection from "../../components/ui/Modal/ModalSection";
import useToggle from "../../hooks/useToggle";

export default function GlobalChatWidget() {
  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50" >
      <ModalSection
        modalTitle="صفحه چت"
        StyleModal={
          "w-[8px] h-[38px] bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out"
        }
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpen={toggleModal}
        size="2xl"
        content={<Chat />}
        // Icon ={
        //   <i className="w-[48px] h-[48px]  bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out">{FaRegMessage}</i>
        // }
      />
    </div>
    </>
  );
}
