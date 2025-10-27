import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ isOpen }) => {
  const items = [
    { title: "مربیان", path: "/coaches" },
    { title: "وبلاگ", path: "/blogsPage" },
    { title: "فروشگاه", path: "/" },
    { title: "ایونت ها", path: "/" },
    { title: "دوره های اموزشی", path: "/courses" },
    { title: "  صفحه اصلی", path: "/" },
  ];

  return (
    <div
      className={`${
        isOpen ? "relative right-18 top-[100px]  z-10 " : "hidden md:block"
      }`}
    >
      <ul
        className={`flex  ${
          isOpen
            ? "gap-3 sm:gap-16 sm:text-2xl"
            : "md:flex-row md:items-center md:gap-2 sm:gap-1 lg:gap-3  w-full text-responsive"
        }`}
      >
        {items.map((item, index) => (
          <Link to={item.path} key={index} className="nav-item">
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarItems;
