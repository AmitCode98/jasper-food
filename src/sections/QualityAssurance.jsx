import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";
import { QualityAssuranceData } from "../constants";


const QualityAssurance = () => {
  return (
    <section>
      <div className="container w-full flex flex-col justify-center">
        <div className="">
          <Heading headingText="Quality assurance" />
        </div>

        <article className="flex flex-col py-10 lg:py-14">
          <p className="font-primary font-light text-lg text-grayText text-center ">
            The Food Safety and Quality Assurance Team plays a critical role in
            upholding our commitment to quality and adherence to Statutory and
            Regulatory requirements.
          </p>
        </article>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 py-[60px] justify-self-center">
          {QualityAssuranceData.map((data, index) => (
            <Card
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
              className="justify-self-center" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
