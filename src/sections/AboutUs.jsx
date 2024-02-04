import React from "react";

import { aboutItem } from "../constants";
import Quote from "./Quote";


const AboutUs = () => {
  return (
    <section className="w-full py-16 md:py-20 ">
      <div className=" container flex flex-col items-center gap-16">
        <h1 className="font-primary font-light text-[32px] lg:text-[48px] text-grayText capitalize text-center">
          about us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {aboutItem.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <img
                src={item.image}
                alt={`${item.title}`}
                className="w-[160px] h-[160px] object-cover rounded-full border-4 border-primaryColor p-3"
              />
              <h3 className="font-primary font-light text-[28px] lg:text-[32px] leading-[38px] text-center capitalize">
                {item.title}
              </h3>
              <p className="font-primary font-light text-[18px] 2xl:text-[20px] text-grayText leading-[24px] 2xl:leading-[26px] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Quote/>
    </section>
  );
};

export default AboutUs;
