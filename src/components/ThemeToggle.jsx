// import React, { useEffect, useState } from "react";
// import { PiMoonLight } from "react-icons/pi";
// import { PiSunLight } from "react-icons/pi";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("light");

//   const handleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     localStorage.setItem("theme", newTheme);
//   };

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//     document.documentElement.classList.toggle("dark", storedTheme === "dark");
//   }, []);
//   return (
//     <label
//       style={{ background: "var(--color-light-gray)" }}
//       htmlFor="check"
//       className="w-12 h-6 rounded-full relative  p-1  shadow-[inset_0_1px_2px_rgba(0,0,0,.25)]"
//     >
//       <input
//         type="checkbox"
//         id="check"
//         className="sr-only peer"
//         onChange={handleTheme}
//       />
//       <span
//         style={{ background: "var(--color-golden-yellow)" }}
//         className="w-2/5 h-4/5 flex justify-center items-center absolute top-[3px] left-1 rounded-full peer-checked:left-6 transition-all duration-500"
//       >
//         {" "}
//         {theme === "light" ? <PiSunLight /> : <PiMoonLight />}{" "}
//       </span>
//     </label>
//   );
// };

// export default ThemeToggle;
