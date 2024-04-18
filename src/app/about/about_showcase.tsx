"use client";
import React from "react";
import Image from "next/image";
import Styles from "@/app/style/about_showcase.module.css";
import { useState, useEffect } from "react";
const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/About/about_5.jpeg",
    "/About/about_6.jpg",
    "/About/about_3.jpg",
    "/About/about_4.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={Styles.about_heading}>
        <h1 className={Styles.about_head}>About Us</h1>
        <p>
          Empowering businesses with cutting-edge solutions, driving digital
          transformation and unlocking limitless possibilities
        </p>
      </div>
      <div className={Styles.about_details}>
        <div className="about_content">
          <h1 className={Styles.content_heading}>Our Mission</h1>
          <p className={Styles.content_description}>
            Our aim is to pioneer the next generation of software solutions,
            redefining industry standards and revolutionizing the digital
            landscape. With a relentless pursuit of excellence, we craft bespoke
            software tailored to meet the unique needs of businesses across
            diverse sectors. Our commitment to innovation drives us to push
            boundaries, leveraging cutting-edge technology to empower
            organizations to thrive in an ever-evolving market. By fostering
            collaboration, creativity, and a culture of continuous improvement,
            we strive to be the trusted partner that propels our clients towards
            sustained success in an increasingly digital world
          </p>
        </div>
        <div className={Styles.about_image}>
          <Image
            src={images[currentIndex]}
            alt="about_image"
            width={700}
            height={800}
          />
        </div>
      </div>
    </>
  );
};

export default Showcase;
