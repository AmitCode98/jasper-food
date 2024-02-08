import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img
        src={icon}
        alt={`${title} Icon`}
        className={`Icon for ${title}`}
      />
      <h3 className="font-primary font-semibold text-xl text-[#101828] capitalize">
        {title}
      </h3>
      <p className="text-center font-primary font-light text-base text-grayText">
        {description}
      </p>
    </div>
  );
};

export default Card;
