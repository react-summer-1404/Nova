import React from "react";

const NavbarItems = ({ isOpen }) => {
  const items = [
    "مربیان ",
    "وبلاگ",
    "فروشگاه",
    "ایونت ها",
    "دوره های آموزشی",
    "صفحه اصلی ",
  ];

  return (
    <div
      className={`${
        isOpen
          ? "relative right-16 top-[100px]  z-10 "
          : "hidden md:block"
      }`}
    >
      <ul
        className={`flex   ${
          isOpen ? "gap-3 sm:gap-16 sm:text-2xl" : "md:flex-row md:items-center md:gap-4 sm:gap-1 lg:gap-3 w-full text-responsive"
        }`}
      >
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarItems;
