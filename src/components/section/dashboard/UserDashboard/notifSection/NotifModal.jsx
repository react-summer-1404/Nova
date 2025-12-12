import React from "react";
import ModalSection from "../../../../ui/Modal/ModalSection";
import useToggle from "../../../../../hooks/useToggle";
import { Badge, Button } from "@heroui/react";
import { IoNotifications } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { getNotification } from "../../../../../servises/api/notificationApi";
import NotifTable from "./NotifTable";
import NotifTableHeader from "./NotifTableHeader";

const NotifModal = () => {
  const [isViewModalOpen, toggleViewModal] = useToggle(false);
  const { data: notif } = useQuery({
    queryKey: ["getNotification"],
    queryFn: getNotification,
  });
  return (
    <div>
      <Badge color="warning" content={notif?.length} shape="circle">
        <Button
          isIconOnly
          radius="full"
          variant="light"
          onPress={() => toggleViewModal()}
        >
          <IoNotifications
            size={30}
            className="cursor-pointer text-dark-purple"
          />
        </Button>
      </Badge>
      <ModalSection
        size="3xl"
        isOpen={isViewModalOpen}
        onClose={toggleViewModal}
        onOpen={toggleViewModal}
        StyleModal={"hidden"}
        content={
          <>
            <div className="flex flex-col items-center w-full  gap-4 ">
              <NotifTableHeader />
              {notif?.length > 0 ? (
                notif.map((item) => (
                  <NotifTable
                  key={item.id}
                  id={item.id}
                    insertDate={item.insertDate}
                    message={item.message}
                  />
                ))
              ) : (
                <span className="text-gray-500 mt-4">پیامی وجود ندارد</span>
              )}
            </div>
          </>
        }
      />
    </div>
  );
};

export default NotifModal;
