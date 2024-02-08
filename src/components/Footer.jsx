import React from "react";
import logo from "../assets/images/logo.webp";

const Footer = () => {
  const navItem = [
    "Home",
    "About Us",
    "Food Safety & Quality",
    "Products",
    "Contact Us",
  ];
  return (
    <footer className="py-16">
      <div className="container w-full h-[1.5px] bg-primaryColor"></div>
      <div className="py-5 container flex justify-between items-center gap-16">
        <img src={logo} alt="Jasper Food Manufacturers Private Limited Logo" className="w-20 md:w-24" />
        <ul className="flex flex-wrap gap-3 text-end font-primary text-grayText capitalize ">
          {navItem.map((items, index) => (
            <li className="hover:text-primaryColor" key={index}>
              <a href="#">{items}</a>
            </li>
          ))}
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
