import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function UserProfModal({icon,children}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["5xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)} className="h-[30px] w-full bg-[#0E0E0E66] absolute bottom-0 flex justify-center items-center cursor-pointer">
            
            {icon}
          </Button>
        ))}
      </div>
      <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
               {children}
              
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

