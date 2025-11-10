import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = () => {
  const items = [
    { title: "مربیان", path: "/coaches" },
    { title: "وبلاگ", path: "/blogs" },
    { title: "دوره های اموزشی", path: "/courses" },
    { title: "  صفحه اصلی", path: "/" },
  ];

  return (
    <div
      className= "hidden md:block"
      
    >
      <ul
        className= "flex md:flex-row md:items-center md:gap-2 sm:gap-1 lg:gap-3  w-full text-responsive text-black"
      
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
