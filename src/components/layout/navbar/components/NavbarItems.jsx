import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarItems = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const items = [
    { title: t("coachersPage"), path: "/coaches" },
    { title:t("blogPage"), path: "/blogs" },
    { title: t("trainingCoursesPage"), path: "/courses" },
    { title: t("landing"), path: "/" },
    { title: t("aboutUs"), path: "/aboutUs" },
    { title: t("contact"), path: "/contactUs" },
  ];

  return (
    <ul className="flex flex-row items-center gap-3 justify-evenly w-full text-responsive text-black">
      {items.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            to={item.path}
            key={index}
            className={`nav-item ${isActive ? "active" : ""}`}
          >
            {item.title}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavbarItems;
