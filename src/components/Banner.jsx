import React from "react";
// import AboutUsBgImg from "../assets/images/aboutUs-bgImg.webp";

const Banner = ({ bannerText, bgImage }) => {
  //   const bannerBackgroundImage = {
  //     backgroundImage: `url(${bgImage})`,
  //   };
  return (
    <section>
      <div
        className="w-full h-[250px] object-cover bg-center bg-no-repeat bg-cover relative flex justify-center items-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-white p-4 md:p-6 lg:p-8 text-[32px] xl:text-[60px] font-primary font-light leading-[100px] tracking-[0.5px] absolute z-10 capitalize">
          {bannerText}
        </h1>
        <div className="h-full w-full absolute bg-black bg-opacity-65"></div>
      </div>
    </section>
  );
};

export default Banner;
