import React from "react";
import AboutUsBgImg from "../assets/images/aboutUs-bgImg.webp";
const Quote = () => {
  return (
    <div className=" pt-16 md:pt-20">
      <div
        className={`w-full h-[450px] md:h-[610px] flex items-center justify-center relative object-cover bg-center bg-no-repeat bg-cover overflow-hidden`}
        style={{ backgroundImage: `url(${AboutUsBgImg})` }}
        alt="Quote background image"
      >
        <div className="h-full w-full absolute bg-black bg-opacity-65"></div>
        <q className="text-white text-base  md:text-xl 2xl:text-2xl font-light font-primary leading-[29.5px] xl:leading-[48px]  2xl:leading-[48px] 2xl:container z-30 text-center w-[80%] ">
          As a highly trusted organization, we specialize in crafting a range of
          products that cater to your every craving, from veg to non-veg frozen
          products. Our menu boasts an array of delights that redefine
          indulgence, all prepared with the utmost precision. Nestled in our
          state-of-the-art manufacturing plant, we take pride in our meticulous
          approach to hygiene. Every step of our process is imbued with care,
          ensuring that you receive only the best quality frozen products.
        </q>
      </div>
    </div>
  );
};

export default Quote;
