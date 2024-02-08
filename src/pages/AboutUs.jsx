import React from "react";
import Banner from "../components/Banner";
import Profile from "../sections/Profile";
import RoundedButton from "../components/RoundedButton";
import { aboutUsLinks } from "../constants";
import Team from "../sections/Team";
import WhyUs from "../sections/WhyUs";
import AboutUsBgImg from "../assets/images/aboutUs-bgImg.webp";

const AboutUs = () => {
  return (
    <section className="w-full">
      <Banner bannerText="about us" bgImage={AboutUsBgImg} />

      <div className="container flex justify-center py-10 md:py-14 lg:py-16 gap-4 md:gap-8 lg:gap-10 overflow-hidden bg-red-40">
        {aboutUsLinks.map((link, index) => (
          <RoundedButton
            key={index}
            text={link.text}
            href={link.href}
            label={link.label}
          />
        ))}
      </div>
      {/* <Profile /> */}
      {/* <Team/> */}
      <WhyUs />
    </section>
  );
};

export default AboutUs;
