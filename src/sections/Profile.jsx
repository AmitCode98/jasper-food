import React from "react";
import Heading from "../components/Heading";
import { profileText } from "../constants";

const Profile = () => {
  return (
    <section>
      <div className="container w-full flex flex-col justify-center">
        <Heading headingText="profile" />

        {profileText.map((text, index) => (
          <article className="flex flex-col py-5" key={index}>
            <p className="font-primary font-light text-lg text-grayText ">
              {text.profileTextOne}
            </p>
            <p className="font-primary font-light text-lg text-grayText ">
              {text.profileTextTwo}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Profile;
