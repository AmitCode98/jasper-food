import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className="py-2 px-10 2xl:py-3 2xl:px-11 bg-primaryColor font-primary text-white font-light text-base leading-[33px] uppercase rounded-lg">
      {buttonText}
    </button>
  );
};

export default Button;
