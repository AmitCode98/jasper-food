import React from "react";
import Banner from "../components/Banner";
import VegBannerBgImg from "../assets/images/vegBanner-img.webp";
import VegFryAndServeImg from "../assets/images/veg-fryAndServe-img.webp";
import VegGrillAndServeImg from "../assets/images/veg-grillAndServe-img.webp";
import VegHeatAndServeImg from "../assets/images/veg-heatAndServe-img.webp";

const Veg = () => {
  const vegItems = [
    { img: VegFryAndServeImg, text: "fry and serve" },
    { img: VegGrillAndServeImg, text: "Grill and Serve" },
    { img: VegHeatAndServeImg, text: "Heat and Serve" },
  ];

  return (
    <section className="w-full ">
      <Banner bannerText="veg" bgImage={VegBannerBgImg} />
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

export default Veg;
