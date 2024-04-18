"use client";
import Head from "next/head";
import { useState } from "react";
import Styles from "@/app/style/Showcase.module.css";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Provide initial state

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

  const slides = [
    {
      name: "Switzerland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
    },
    {
      name: "Ireland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
    },
    {
      name: "Germany",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
    },
    {
      name: "Switzerland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
    },
  ];

  return (
    <div className={Styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className={Styles.slide}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${Styles.item} ${
              index === currentSlide ? Styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className={Styles.content}>
              <div className={Styles.name}>{slide.name}</div>
              <div className={Styles.des}>{slide.description}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.button}>
        <button className={Styles.prev} onClick={handlePrev}>
          <FaLongArrowAltLeft />
        </button>
        <button className={Styles.next} onClick={handleNext}>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
