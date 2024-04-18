"use client";
import React, { useEffect, useState } from "react";
import ProcessDisplay from "./Process";
import CardDisplay from "./Card";
import Progressbar from "./Progressbar";
import Faq from "./Faq";

const page = () => {
  const [bgColor, setBgColor] = useState("bg-[#17575c]");

  useEffect(() => {
    const handleScroll = () => {
      const offeringDiv = document.getElementById("offering");
      if (offeringDiv) {
        const rect = offeringDiv.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setBgColor("bg-white");
        } else {
          setBgColor("bg-[#17575c]");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${bgColor} ${
        bgColor === "bg-white" ? "text-black" : "text-white"
      } transition-all duration-500 space-y-20`}
    >
      <div className={`space-y-5`}>
        <div className="flex flex-col items-center text-center space-y-3 pt-8 mt-20">
          <h1 className="text-4xl min-w-[19rem] max-w-[35rem] px-5 sm:max-w-[45rem] lg:text-3xl lg:max-w-[65rem]">
            We can design the products and services that can improve both your
            personal and professional lives.
          </h1>
          <p className="text-[#a6c1bf] text-lg md:text-xl w-[18rem]">
            Here's how we do it.
          </p>
        </div>
        <ProcessDisplay />
      </div>
      <div
        id="offering"
        className="flex flex-col items-center text-center px-5"
      >
        <CardDisplay />
      </div>
      <Progressbar />
      <Faq />
    </section>
  );
};

export default page;
