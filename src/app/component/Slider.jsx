"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/style/Carousel.module.css";
import Part from "../home/part_3";
import Pricing from "../home/Pricing_table";
import Companies from "@/app/home/companies";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: "Revolutionizing Industries with Technology",
      imageUrl: "/shart.jpg",
      paragraph: "Crafting tailored solutions for your success",
      buttonText: "Read More",
      bg: "/1.png",
    },
    {
      // text: "Trusted by Businesses Worldwide Our Software's Impact",
      text: "Our Software, Trusted Globally, has a Significant Business Impact.",
      imageUrl: "/lowo-1.jpg",
      paragraph: "Empowering businesses through technology",
      buttonText: "Explore More",
    },
    {
      text: "Leading the Way in Software Innovation",
      imageUrl: "lowo-2.jpg",
      paragraph: "Driven by a passion for innovation",
      buttonText: "Learn More",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000); // Change slide every 20 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]); // Reset timer when slides change

  return (
    <>
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className={styles.content}>
              <h1 className={styles.show_heading}>{slide.text}</h1>
              <p className={styles.show_paragraph}>{slide.paragraph}</p>
              <button className={styles.show_button}>{slide.buttonText}</button>
            </div>
          </div>
        ))}
        <button className={styles.prev} onClick={handlePrev}>
          <RiArrowLeftDoubleFill />
        </button>
        <button className={styles.next} onClick={handleNext}>
          <RiArrowRightDoubleLine />
        </button>
      </div>
      <Part />
      <Pricing />
      <Companies />
    </>
  );
};

export default Carousel;
