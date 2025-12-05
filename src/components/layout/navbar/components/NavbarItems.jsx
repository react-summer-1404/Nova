import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarItems = () => {
  const location = useLocation();

  const items = [
    { title: "مربیان", path: "/coaches" },
    { title: "وبلاگ", path: "/blogs" },
    { title: "دوره های آموزشی", path: "/courses" },
    { title: "صفحه اصلی", path: "/" },
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
