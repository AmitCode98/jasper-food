import React from "react";
import { socialMedia } from "../constants";

const Social = () => {
  return (
    <section className="w-full">
      <div className="py-16 flex flex-col justify-center items-center gap-16">
        <h1 className="font-primary font-light text-[32px] lg:text-[48px] text-grayText capitalize text-center">
          Social
        </h1>

        {/* social media icon */}
        <ul className="bg-red-40 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 font-primary text-base leading-8 text-center capitalize gap-12 text-grayText container">
          {socialMedia.map((item, index) => (
            <li
            className=""
              key={index}
            >
              <a href={item.link} className=" flex flex-col justify-center items-center gap-3" target="_blank" rel="noopener noreferrer">
                <img src={item.socialMediaIcon} alt={item.socialMediaName} />
                <p>{item.socialMediaName}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Social;
