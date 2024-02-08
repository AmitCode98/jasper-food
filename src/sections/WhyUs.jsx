import React from "react";
import Heading from "../components/Heading";
import { whyUsData } from "../constants";
import Card from "../components/Card";

const WhyUs = () => {
  return (
    <section>
      <div className="container">
        <div className="">
          <Heading headingText="why us" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 py-[60px] justify-self-center">
          {whyUsData.map((data, index) => (
            <Card
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
