"use client";
import React, { useState } from "react";
import styles from "../style/yahya.module.css";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      {/* mobile devices */}
      <>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className={styles.BTN}>
          <button className={styles.navBtn} onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <Image src="/close_nav.png" width={30} height={30} alt="logo" />
            ) : (
              <Image
                src="/nav_open.png"
                width={30}
                height={30}
                alt="logo"
                className="focus:border-none active:border-none"
              />
            )}
          </button>
        </div>
      </>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/logoo.png"
            alt="Your Company Logo"
            width={150}
            height={50}
          />
        </div>
        <div className={` ${navbar ? "hidden" : "p-12 md:p-0 block"}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link className={styles.link} href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/about">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/services">
                SERVICES
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/Portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
