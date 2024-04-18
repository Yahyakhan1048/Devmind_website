import React from "react";
import { cardData } from "./data";
// npm i react-icons
const Card = ({ title, text, Icon }) => {
  return (
    <div className="group hover:border-r-2 hover:border-b-2 border-black hover:border-dashed rounded-br-md w-80 sm:w-[18rem] md:w-[14rem] lg:w-[18rem] xl:w-[24rem]">
      <div className="group-hover:bg-[#17575c] group-hover:text-white cursor-pointer h-[15rem] border border-black rounded-md flex justify-center items-center transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:lg:-translate-x-4 group-hover:lg:-translate-y-4">
        <div className="group-hover:hidden flex flex-col items-center space-y-4 lg:space-y-6">
          <Icon className="text-4xl lg:text-6xl" />
          <h3 className="text-xl mb-8">{title}</h3>
        </div>
        <p className="hidden group-hover:block px-5">{text}</p>
      </div>
    </div>
  );
};

const CardDisplay = () => {
  return (
    <div className="flex flex-col items-center space-y-10 sm:w-[37rem] md:w-[45rem] lg:w-[58.5rem] xl:w-[78rem]">
      <div className="lg:w-[58.5rem] xl:w-[78rem]">
        <p className="text-2xl md:text-3xl xl:text-xl px-[5rem] font-medium sm:text-left lg:w-[48rem] xl:w-[63rem] left-0">
          At our software house, we offer solutions tailored to your needs. Our
          team of experts delivers innovative software development, seamless
          integration, and top-notch support.
        </p>
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 xl:gap-11">
        {cardData.map((card, key) => {
          return (
            <Card
              key={key}
              title={card.title}
              text={card.text}
              Icon={card.Icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardDisplay;
