import React from "react";
import Heading from "../components/Heading";

const Certifications = () => {
  return (
    <section>
      <div className="container w-full flex flex-col justify-center">
        <div className="">
          <Heading headingText="certifications" />
        </div>

        <article className="flex flex-col py-10 lg:py-14">
          <p className="font-primary font-light text-lg text-grayText text-center ">
            Our state-of-the-art manufacturing facility and products have
            received certifications from significant national and international
            bodies, including BRC, HALAL, USFDA, FSSAI, and EIA.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Certifications;
