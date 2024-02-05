import React from "react";
import logo from "../assets/images/logo.png";

const LogoAndCompanyName = () => {
  return (
    <div className="flex items-center space-x-1">
      <img src={logo} alt="logo" className="w-20 md:w-24" />
      <p className="font-secondary text-[#4946BE] text-lg md:text-[22px] font-normal italic ">
        Jasper Food Manufacturers Private Limited (JFMPL)
      </p>
    </div>
  );
};

export default LogoAndCompanyName;
