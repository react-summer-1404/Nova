
// import { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { Modal, ModalHeader, ModalBody, Button } from "@heroui/react";
import Chat from "./Chat";
import ModalSection from "../../components/ui/Modal/ModalSection";
import useToggle from "../../hooks/useToggle";

export default function GlobalChatWidget() {
  // const [open, setOpen] = useState(false); 
  // const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);
  const [isModalOpen, toggleModal, setIsModalOpen] = useToggle(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50" >
      <ModalSection
        modalTitle="صفحه چت"
        // Icon={FaRegMessage}
        // style={{direction: "ltr"}}
        StyleModal={
          "md:px-3 px-2 h-[30px] rounded-[10px] flex items-center bg-light-purple"
        }
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpen={toggleModal}
        size="2xl"
        content={<Chat />}
        Icon ={
          <i className="w-[48px] h-[48px]  bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out">{FaRegMessage}</i>
        }
      />
    </div>
    </>
  );
}
