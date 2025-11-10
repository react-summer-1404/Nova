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
  
      <ul
        className= "flex flex-row items-center gap-3  justify-evenly t w-full text-responsive text-black "
      
      >
        {items.map((item, index) => (
          <Link to={item.path} key={index} className="nav-item">
            {item.title}
          </Link>
        ))}
      </ul>
  );
};

export default NavbarItems;
