import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function DrawerComponent({
  Content,
  Icon,
  ButtonText,
  buttonStyle,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["lg"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button
            key={size}
            onPress={() => handleOpen(size)}
            className={buttonStyle}
          >
            <div className="flex gap-2">
              {Icon && <i>{Icon}</i>}
              {ButtonText && (
                <span className="text-white font-semibold text-base">
                  {ButtonText}
                </span>
              )}
            </div>
          </Button>
        ))}
      </div>
      <Drawer isOpen={isOpen} size={size} onClose={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1"></DrawerHeader>
              <DrawerBody>{Content}</DrawerBody>
              <DrawerFooter></DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
