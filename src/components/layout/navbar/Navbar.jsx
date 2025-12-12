import { useState, useEffect } from "react";
import "../../../assets/styles/nav.css";
import Logo from "../../ui/Logo/Logo";
import { getToken } from "../../../hooks/localStorage";
import AvatarComponent from "../../ui/Avatar/Avatar";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../../../servises/api/userPanel/getProfileInfo";
import { useNavigate } from "react-router";
import Responsive from "./components/Responsive";
import UserCartFavorites from "./components/UserCartFavorites";
import SearchBox from "./components/SearchBox";
import NavbarItems from "./components/NavbarItems";
import { motion, useScroll } from "framer-motion";
import AccountBtn from "./components/AccountBtn";
import { Badge } from "@heroui/react";
import { getNotification } from "../../../servises/api/notificationApi";

const Navbar = () => {
  const navigate = useNavigate();
  const token = getToken();
  const { data } = useQuery({
    queryKey: ["getAvatar"],
    queryFn: getCurrentUserProfile,
    enabled: !!token,
  });
  const { scrollYProgress } = useScroll();
  const [visibleShadow, setVisibleShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setVisibleShadow(true);
      else setVisibleShadow(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  const { data: notif } = useQuery({
    queryKey: ["getNotification2"],
    queryFn: getNotification,
    enabled: !!token,

  });
  return (
    <div
      className={`w-full p-4 gap-6   fixed top-0 left-0 bg-white z-999  ${
        visibleShadow ? "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" : ""
      }`}
    >
      <div className=" relative flex  md:gap-2 justify-between items-center p-4   w-full  ">
        <div className="flex-center md:flex-start  items-center xl:gap-6 md:gap-2 ">
          <div className="hidden lg:flex">
            {token ? (
              <Badge
                color="danger"
                content=""
                size="md"
                placement="top-right"
                className={notif?.length ? "block" : "hidden"}

              >
                <AvatarComponent
                  src={data?.currentPictureAddress||"/default.png"}
                  onclick={() => navigate("/dashboard")}
                />
              </Badge>
            ) : (
              <AccountBtn onclick={() => navigate("/auth")} />
            )}
          </div>
          <div className="hidden lg:block">
            <UserCartFavorites />
          </div>
          <div className="hidden lg:block">
            <SearchBox />
          </div>
          <div className="lg:hidden">
            <Responsive data={data} />
          </div>
        </div>
        <div className="flex justify-start items-center sm:gap-1  md:gap-4 lg:gap-6  ">
          <div className="hidden lg:block">
            <NavbarItems />
          </div>
          <Logo />
        </div>
      </div>
      <motion.div
        style={{ scaleX: scrollYProgress, originX: 0 }}
        className="h-[4px] bg-dark-purple absolute bottom-0 left-0  w-full"
      />
    </div>
  );
};

export default Navbar;
