import React from "react";
import { teamText } from "../constants";
 import Heading from "../components/Heading";

const Team = () => {
  return (
    <section>
      <div className="container w-full flex flex-col justify-center">
        <Heading headingText="team" />

        {teamText.map((text, index) => (
          <article className="flex flex-col py-5" key={index}>
            <p className="font-primary font-light text-lg text-grayText ">
              {text.teamTextOne}
            </p>
            <p className="font-primary font-light text-lg text-grayText ">
              {text.teamTextOne}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
