import React from "react";
import Image from "next/image";
import Styles from "../style/Foot.module.css";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
const MyComponent = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.item}>
          <Image src="/logo.png" alt="Product Image" width={150} height={150} />
          <p>The best way to predict the future is to invent it</p>
          <div className={Styles.icons}>
            <Link
              href="https://x.com/Devmind417452?t=lHOlWOOJqzZ6PSAyWqwLMw&s=09"
              className={Styles.icn}
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.instagram.com/devmindofficial?igsh=MW02MWgwcjM1OTEyZw=="
              className={Styles.icn}
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61556658822509&mibextid=ZbWKwL"
              className={Styles.icn}
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>
        <div className={Styles.footer_linkss}>
          <div className={Styles.item}>
            <h1>Company</h1>
            <ul>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/Portfolio">Portfolio</Link>
              <Link href="/">How we Work?</Link>
            </ul>
          </div>
          <div className={Styles.item}>
            <h1>Services</h1>
            <ul>
              <Link href="/services">Web Design</Link>
              <Link href="/services">App Design</Link>
              <Link href="/services">Logo Design</Link>
              <Link href="/services">Banner Design</Link>
              <Link href="/services">Card Design</Link>
            </ul>
          </div>
          <div className={Styles.item}>
            <h1>Contact</h1>
            <ul>
              <Link href="/contact">Help/FAQ</Link>
              <Link href="/contact">Press</Link>
              <Link href="/contact">Affliates</Link>
              <Link href="/about">Partners</Link>
              <Link href="/about">Company holder</Link>
            </ul>
          </div>
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className={Styles.policy_container}>
        <div className={Styles.policy_heading_container}>
          <h4>©Copyright DevMind 2024. All rights reserved</h4>
        </div>
        <div className={Styles.policy_links_container}>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
