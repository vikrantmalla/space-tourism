import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../public/assets/shared/logo.svg";
import Link from "next/link";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-3 mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-row justify-between">
            <div className="flex items-center">
              <Image className="logo mx-2" src={Logo} width={30} alt="logo" />
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
                  <Link href="/">00 HOME</Link>
                </li>
                <li id="dest-nav-btn">
                  <Link href="/destination">01 DESTINATION</Link>
                </li>
                <li id="crew-nav-btn">
                  <Link href="/crew">02 CREW</Link>
                </li>
                <li id="tech-nav-btn">
                  <Link href="/technology">03 TECHNOLOGY</Link>
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
