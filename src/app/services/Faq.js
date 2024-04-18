"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { accordianData } from "./data";
import Image from "next/image";

// npm install react-icons
const Accordion = ({ title, children, bodyVisible, onClick }) => {
  return (
    <div
      className={`w-80 sm:w-[27rem] md:w-[29rem] border-[1.2px] border-black rounded-lg ${
        bodyVisible && "space-y-2"
      }`}
    >
      <div
        className="group flex justify-between items-center cursor-pointer px-5 py-3 md:py-5 space-x-3"
        onClick={onClick}
      >
        <h3 className="">{title}</h3>
        {bodyVisible ? <FaMinus size={13} /> : <FaPlus size={13} />}
      </div>
      <p
        className={`overflow-hidden transition-all duration-300 px-5 ${
          bodyVisible ? "max-h-[15rem] pb-5" : "max-h-0 pb-0"
        }`}
      >
        {children}
      </p>
    </div>
  );
};

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const handleActiveAccordion = (index) => {
    setActiveAccordion((prev) => {
      const valuesToCheck = [null, ...accordianData.map((prop) => prop.id)];
      const elementExists = valuesToCheck
        .filter((prev) => prev !== index)
        .some((value) => prev === value);
      return elementExists ? index : null;
    });
  };
  return (
    <div className="flex flex-col items-center px-5">
      <div className="space-y-8 sm:w-[37rem] md:w-[45rem] lg:w-[58.5rem] xl:w-[78rem] flex flex-col items-center">
        <div className="lg:w-[58.5rem] xl:w-[78rem]">
          <p className="text-2xl md:text-3xl xl:text-4xl font-medium text-center sm:text-left lg:w-[48rem] xl:w-[63rem] left-0">
            Find the answers to all of our frequently asked questions.
          </p>
        </div>
        <div className="space-y-8 lg:flex lg:flex-row lg:items-end lg:space-x-[2rem] xl:space-x-[10rem] pb-5">
          <Image
            src={"/images/questions.svg"}
            alt="question"
            height={500}
            width={500}
            className="h-[15rem] sm:h-[16rem] md:h-[17rem] lg:hidden"
          />
          <div className="flex flex-col items-center space-y-3">
            {accordianData.map((data, key) => {
              return (
                <Accordion
                  key={key}
                  onClick={() => handleActiveAccordion(data.id)}
                  title={data.title}
                  bodyVisible={activeAccordion === data.id}
                >
                  {data.text}
                </Accordion>
              );
            })}
          </div>
          <Image
            src={"/images/questions.svg"}
            alt="question"
            height={500}
            width={500}
            className="h-[15rem] sm:h-[16rem] md:h-[15rem] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
