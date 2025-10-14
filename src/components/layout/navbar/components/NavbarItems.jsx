import React from 'react';

const NavbarItems = () => {
  const items = [
    "مربیان ",
    "وبلاگ",
    "فروشگاه",
    "ایونت ها",
    "دوره های آموزشی",
    "صفحه اصلی "
  ];

  return (
    <ul className="hidden md:flex md:items-center md:gap-4 sm:gap-1 lg:gap-3 w-3/4 text-responsive ">
      {items.map((item, index) => (
        <li key={index} className="nav-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavbarItems;
