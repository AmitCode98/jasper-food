import React from "react";
import Banner from "../components/Banner";
import NonVegBannerBgImg from "../assets/images/nonVegBanner-img.webp";
import NonVegFryAndServeImg from "../assets/images/nonVeg-fryAndServe-img.webp";
import NonVegGrillAndServeImg from "../assets/images/nonVeg-grillAndServe-img.webp";
import NonVegHeatAndServeImg from "../assets/images/nonVeg-heatAndServe-img.webp";

const NonVeg = () => {
  const vegItems = [
    { img: NonVegFryAndServeImg, text: "fry and serve" },
    { img: NonVegGrillAndServeImg, text: "Grill and Serve" },
    { img: NonVegHeatAndServeImg, text: "Heat and Serve" },
  ];

  return (
    <section className="w-full ">
      <Banner bannerText="veg" bgImage={NonVegBannerBgImg} />
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-[60px]">
        {vegItems.map((item, index) => (
          <div className="" key={index}>
            <img src={item.img} alt={item.text} />
            <h3 className="text-center font-primary font-light text-3xl capitalize pt-5 ">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NonVeg;
