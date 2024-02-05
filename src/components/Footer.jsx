import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container w-full h-[1.5px] bg-primaryColor"></div>
      <div className="py-5 container flex justify-center items-center gap-16">
        <img src={logo} alt="logo" className="w-20 md:w-24" />
        <ul className="flex flex-wrap gap-3 text-end font-primary text-grayText">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Food safty & qulity</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
      </div>
      <p className="container text-[13px] pt-7 leading-4 font-light font-primary text-grayText text-center ">
        <span className="text-grayText">©</span>Copyright Jasper Food
        Manufacturers Private Limited (JMFL) 2023, All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
