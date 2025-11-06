import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
export default function ModalSection({ content, modalTitle ,ButtonText,Icon,StyleModal}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("opaque");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            className={StyleModal}
            variant="flat"
            onPress={() => handleOpen(b)}
          >
           <div className="flex gap-2">
            {Icon && <i>{Icon}</i>}
            {ButtonText&&<span className="text-white font-semibold text-base">{ButtonText}</span>}
           </div>
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>{content}</ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
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

//  ----------- How to use this component ------------

// content =========> محتوایی که میخواین توی مودال نمایش بدین (میتونین به صورت کامپوننت هم بهش پاس بدین)
// modalTitle ========> تایتل مودال 
// ButtonText =========> متنی که میخواین توی دکمه مودال باشه (اختیاری)
// Icon =========> ایکونی که میخواین توی دکمه مودال باشه (اختیاری)