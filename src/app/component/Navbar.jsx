"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-screen bg-[#17575c] mb-8 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                {/* <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2> */}
                <Image
                  src="/logoo.png"
                  width={140}
                  height={100}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close_nav.png"
                      width={30}
                      height={30}
                      alt="logo"
                    />
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
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className=" pb-6 text-xl text-white py-7 md:px-6 text-center border-b-2 md:border-b-0 hover:text-black border-black">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-7 md:px-6 text-center border-b-2 md:border-b-0 hover:text-black border-black">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    ABOUT
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-7 md:px-6 text-center border-b-2 md:border-b-0 hover:text-black  border-black">
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    SERVICES
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-7 md:px-6 text-center border-b-2 md:border-b-0 hover:text-black  border-black">
                  <Link href="/Portfolio" onClick={() => setNavbar(!navbar)}>
                    PORTFOILO
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-7 md:px-6 text-center border-b-2 md:border-b-0 hover:text-black border-black">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
