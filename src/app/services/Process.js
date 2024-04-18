import Image from "next/image";
import React from "react";
import { processData } from "./data";

const Process = ({ title, text, img, alt }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[17rem] max-w-[22rem] sm:min-w-[15rem] sm:max-w-[22rem] space-y-7">
        <Image src={img} alt={alt} height={500} width={500} className="sm:h-[10rem] md:h-[11rem] lg:h-[12rem] xl:h-[14rem]" />
        <div className="text-center space-y-4 text-lg sm:text-base md:text-lg">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-[#a6c1bf]">{text}</p>
        </div>
      </div>
    </div>
  );
};

const ProcessDisplay = () => {
  return (
    <div className="space-y-12 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center">Process</h2>
      <div className="w-full px-6 space-y-16 sm:space-y-0 sm:grid grid-cols-2 sm:min-w-[40rem] sm:max-w-[85rem] gap-y-16 lg:gap-y-24 gap-x-8">
        {processData.map((value, key) => {
          return (
            <Process
              key={key}
              title={value.title}
              text={value.text}
              alt={value.alt}
              img={value.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProcessDisplay;