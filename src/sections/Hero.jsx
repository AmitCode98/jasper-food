import React from "react";
import Button from "../components/Button";
import { heroItem } from "../constants";
// import LazyLoad from "react-lazy-load";

const Hero = () => {
  const { title, description, bgImg } = heroItem;
  return (
    <>
      {/* Hero section */}

      <section
        className=" w-full h-[calc(100vh-96px)] flex items-center justify-center relative object-cover bg-center bg-no-repeat bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
        alt="Hero background image"
      >
        <div className="h-full w-full absolute bg-black bg-opacity-65 "></div>

        <div className="container w-full md:w-[80%] xl:w-[70%] flex flex-col space-y-8 md:space-y-3 2xl:space-y-10 justify-center items-center text-center relative">
          <h1 className="w-full font-primary text-[40px] md:text-[60px] 2xl:text-[80px] leading-[50px] md:leading-[80px] 2xl:leading-[90px] tracking-[0.5px] font-light text-white ">
            {title}
          </h1>
          <p className="text-white font-primary font-light text-base md:text-lg xl:text-xl tracking-[0.5px] xl:px-28 bg-red-30">
            {description}
          </p>
          <Button buttonText="Explore" />
        </div>
      </section>
    </>
  );
};

export default Hero;
