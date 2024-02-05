import React, { useState } from "react";
import LogoAndCompanyName from "./LogoAndCompanyName";
import { IoIosArrowDown } from "react-icons/io";
import { menuItems } from "../constants";
import { Fade, Turn } from "hamburger-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const NavMenu = () => {
    return (
      <ul className=" flex flex-col lg:flex-row items-center gap-5">
        {/* Nav menu */}
        {menuItems.map(({ name, href, hasDropdown }) => (
          <li
            key={href}
            className="hover:text-primaryColor flex items-center gap-[2px]"
          >
            <a href={href} className="font-primary">{name}</a>
            {hasDropdown && <IoIosArrowDown className="text-black" />}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="bg-white  h-24 w-full flex items-center sticky top-0 z-20">
      <nav className="container flex items-center justify-between gap-8">
        {/* Logo and Company Name */}
        <LogoAndCompanyName />

        {/* large screen view  */}
        <div className="max-lg:hidden">
          <NavMenu />
        </div>
        <div className="lg:hidden">
          <Fade size={24} onToggle={toggleMenu} />
        </div>
        {/* {open ? (
          <IoIosClose onClick={toggleMenu} className="text-3xl" />
        ) : (
          <IoIosMenu onClick={toggleMenu} className="text-3xl" />
        )} */}
      </nav>

      {/* Mobile screen view */}
      <div
        className={`bg-white z-50 overflow-hidden text-black lg:hidden absolute top-[100%] w-full h-[calc(100vh-96px)] ${
          open ? " scale-y-100 origin-top" : " scale-y-0  origin-top"
        } transition-all duration-300`}
      >
        <div className="container h-full flex items-center justify-center">
          <div className="font-medium text-lg">
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
