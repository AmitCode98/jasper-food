import React from "react";
import { processStep } from "../constants";

const Process = () => {
  return (
    <section className="w-full">
      <div className="container flex flex-col space-y-[40px] md:space-y-[64px]">
        <h1 className="font-primary font-light text-[32px] lg:text-[48px] text-grayText capitalize text-center ">
          Process & Infrastructure
        </h1>

        {processStep.map((item, index) => {
          // Assuming contentOrderClass is calculated based on the index
          const contentOrderClass =
          index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row";

          return (
            <div
              key={index}
              className={`flex flex-col w-full justify-between gap-[25px] lg:gap-[60px] xl:gap-[100px] xl:pb-14 lg:grid-cols-2 ${contentOrderClass}`}
            >
              <div className="flex flex-col text-start w-full lg:w-[40%]  gap-5 md:gap-10">
                <h2 className="font-primary font-light text-[26px]  lg:text-[48px] text-grayText capitalize text-start leading-tight">
                  {item.processname}
                </h2>
                <p className="text-lg leading-6 font-light font-primary text-grayText">
                  {item.description}
                </p>
              </div>
              <div className="rounded-full">
                <img src={item.image} alt={item.processname} className="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
