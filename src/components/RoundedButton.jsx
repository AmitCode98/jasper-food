import React from "react";

const RoundedButton = ({ text, href, label }) => {
  return (
    <div
      className="flex justify-center items-center  bg-[#F5F5F5]  hover:bg-primaryColor  rounded-[50px] cursor-pointer outline-none border-none"
      style={{
        // boxShadow:
        //   "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
        transition: "all 0.3s ease 0s",
      }}
    >
      <a
        href={href}
        className="capitalize py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-14 text-grayText hover:text-white font-primary text-base md:text-xl font-semibold tracking-[0.5px] leading-[23.48px]"
        aria-label={label}
      >
        {text}
      </a>
    </div>
  );
};

export default RoundedButton;
