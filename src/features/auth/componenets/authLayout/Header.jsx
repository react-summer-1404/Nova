import React from "react";
// import ThemeToggle from "../../../../components/ThemeToggle";
import { IoHome } from "react-icons/io5";
import DrawerComponent from "../../../../components/ui/Drawer/DrawerComponent";
import SideBar from "../../../../components/section/dashboard/UserInformation/sideBar";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router";
import { IoNotifications } from "react-icons/io5";
import { Badge, Button } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { getNotification } from "../../../../servises/api/notificationApi";
const Header = ({ data }) => {
  const { data: notif } = useQuery({
    queryKey: ["getNotification"],
    queryFn: getNotification,
  });
  return (
    <div className={"flex justify-between  w-full items-center"}>
      <div className="flex items-center justify-between p-8 gap-3">
        <Link to={"/"}>
          <IoHome className="cursor-pointer text-dark-purple" size={30} />
        </Link>

        <Badge color="warning" content={notif?.length} shape="circle">
          <Button isIconOnly radius="full" variant="light">
            <IoNotifications
              size={30}
              className="cursor-pointer text-dark-purple"
            />
          </Button>
        </Badge>
      </div>

      <div className="lg:hidden">
        <DrawerComponent
          buttonStyle={"bg-transparent"}
          Icon={<MdMenu size={22} className="text-dark-purple" />}
          Content={<SideBar data={data} />}
        />
      </div>
    </div>
  );
};

export default Header;
