import React from "react";

const Heading = ({ headingText }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-primary font-light leading-[55px] lg:leading-[80px] text-[32px] lg:text-5xl tracking-[0.5px] text-grayText capitalize">
          {headingText}
        </h2>
        <div className="w-[80%] h-[5px] bg-primaryColor rounded-full "></div>
      </div>
    </div>
  );
};


export default Heading;
