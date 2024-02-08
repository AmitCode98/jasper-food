import React from "react";
import Banner from "../components/Banner";
import FoodSafetyAndQulityBannerImg from "../assets/images/FoodSafetyAndQualityBanner-img.webp";
import RoundedButton from "../components/RoundedButton";
import { FoodSafetyAndQualityLinks } from "../constants";
import Certifications from "../sections/Certifications";
import QualityAssurance from "../sections/QualityAssurance";

const FoodSafetyAndQuality = () => {
  return (
    <section className="">
      <Banner
        bannerText="food safety & quality"
        bgImage={FoodSafetyAndQulityBannerImg}
      />
      <div className="container flex justify-center py-10 md:py-14 lg:py-16 gap-4 md:gap-8 lg:gap-10 overflow-hidden">
        {FoodSafetyAndQualityLinks.map((link, index) => (
          <RoundedButton
            key={index}
            text={link.text}
            href={link.href}
            label={link.label}
          />
        ))}
      </div>
      {/* <Certifications/> */}
      <QualityAssurance/>
    </section>
  );
};

export default FoodSafetyAndQuality;
