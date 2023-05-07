import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../public/assets/shared/logo.svg";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-3 mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-row justify-between">
            <div className="flex items-center">
              <Image className="logo mx-2" src={Logo} width={30} alt="logo"/>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <FaTimes size={25} style={{ color: "#fff" }} />
              ) : (
                <FaBars size={25} style={{ color: "#fff" }} />
              )}
            </button>
            <div className="hidden lg:flex items-center bg-transparent backdrop-blur-10 py-4">
              <ul className="flex flex-column items-center gap-3 text-white">
                <li id="home-nav-btn">
                  <a href="index.html">00 HOME</a>
                </li>
                <li id="dest-nav-btn">
                  <a href="destination.html">01 DESTINATION</a>
                </li>
                <li id="crew-nav-btn">
                  <a href="crew.html">02 CREW</a>
                </li>
                <li id="tech-nav-btn">
                  <a href="technology.html">03 TECHNOLOGY</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
