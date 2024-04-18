import React from "react";
import Showcase from "@/app/about/about_showcase";
import CardText from "@/app/about/cardText";
import Vision_card from "./Vision_card";
import Cards from "./cards";
import Reality from "./Reality";
import Counter from "./Counter";
const About = () => {
  return (
    <div className=" style={{ width: '100%' }}">
      <Showcase />
      <CardText />
      <Cards />
      <Vision_card />
      <Reality />
      <Counter />
    </div>
  );
};

export default About;
