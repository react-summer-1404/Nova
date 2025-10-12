import React from "react";
import "../assets/styles/utils.css"
import Logo from "../assets/Logos/logo1.svg";

const Navbar = () => {
  return (
    <div className ="flex-center gap-6">
      <div className ="flex justify-start gap-3">
        <div className="flex">
          <img src={Logo} alt="Logo"></img>
          <div className=" flex flex-col">
          <span>نامبروان</span>
          <span>همیشه بهترین</span>
          </div>
          
        </div>
        <div>گزینه ها</div>
      </div>

      <div className ="flex justify-start gap-3">
        <div>سرچ باکس</div>
        <div>سبد و مورد علاقه</div>
        <div>حساب</div>
      </div>
    </div>
  );
};

export default Navbar;
