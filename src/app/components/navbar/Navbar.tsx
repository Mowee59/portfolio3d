"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import { navLinks } from "@/constants";
// import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// const NavItems = ({ onClick }: { onClick: () => void }) => {
//   return (
//     <ul className="nav-ul">
//       {navLinks.map(({ id, href, name }) => (
//         <li key={id} className="nav-li">
//           <Link
//             href={href}
//             className="after:origin-cente relative block w-fit cursor-pointer text-xl after:absolute after:block after:h-[3px] after:w-full after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
//             onClick={onClick}
//           >
//             {name}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

const MenuItems = ({ onLinkClick }: { onLinkClick: () => void }) => {
  return (
    <ul>
      {navLinks.map(({ id, href, name }) => (
        <li
          key={id}
          className="nav -mb-10 text-white opacity-0 transition-all duration-200 ease-in-out hover:text-neutral-400"
        >
          <Link
            href={href}
            onClick={onLinkClick}
            className="text-[2.5rem] sm:text-[3rem]"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const menuRef = useRef<HTMLButtonElement>(null);
  const exitRef = useRef<HTMLImageElement>(null);
  const menuTimeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.to(".menu", {
      opacity: 1,
      duration: 1,
      top: 0,
      ease: "power3.out",
    });
    menuTimeline.current.to(
      ".nav",
      {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      },
      ">-0.5",
    );

    const play = () => {
      menuTimeline.current?.play().timeScale(1);
      console.log("play");
      toggleMenu();
    };

    const reverse = () => {
      menuTimeline.current?.timeScale(2.5);
      menuTimeline.current?.reverse();
      toggleMenu();
    };

    menuRef.current?.addEventListener("click", play);
    exitRef.current?.addEventListener("click", reverse);

    return () => {
      menuRef.current?.removeEventListener("click", play);
      exitRef.current?.removeEventListener("click", reverse);
    };
  });

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLinkClick = () => {
    menuTimeline.current?.timeScale(2.5);
    menuTimeline.current?.reverse();
    toggleMenu();
  };

  return (
    <>
      {/* Remove hidden class to show the navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 bg-[var(--background)] transition-all duration-300`}
      >
        <div className="container mx-auto">
          <div className="c-space mx-auto flex items-center justify-between py-5">
            <Link
              href="/#home"
              className="flex items-baseline gap-3 fill-white text-xl font-bold text-white transition-colors hover:fill-neutral-400 hover:text-neutral-400"
            >
              <Logo className="size-6" />
              Aniss.dev
            </Link>

            <button
              // onClick={toggleMenu}
              className={`flex text-neutral-400 hover:text-white focus:outline-none ${
                isOpen ? "hidden" : "block"
              }`}
              aria-label="Open menu"
              ref={menuRef}
            >
              <Image
                src={"/assets/menu.svg"}
                alt="menu burger icon"
                width={24}
                height={24}
              />
            </button>

            {/* <nav className="hidden lg:flex">
              <NavItems onClick={handleLinkClick} />
            </nav> */}
          </div>
        </div>
      </header>

      {/* Menu Stuff */}
      {/* set opacity back to to 30 */}
      <div className="menu fixed top-[-150%] z-50 mx-auto flex h-screen w-full flex-col items-center justify-center gap-3 bg-[#0a0a0a] px-[50px] opacity-30">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="absolute z-[1] select-none text-[15rem] font-semibold text-[rgba(235,235,235,0.04)]">
            Menu
          </div>
          {/* Exit Button */}
          <img
            src="./assets/close.svg"
            className="absolute right-10 top-10 z-50 size-10 cursor-pointer"
            alt="Close menu"
            ref={exitRef}
          />

          <div className="menu-container z-[3]">
            <MenuItems onLinkClick={handleLinkClick} />
          </div>
          <div className="menu-container right hidden flex-col gap-6 md:flex">
            <div className="information text-xl">
              <p className="title text-4xl text-[#aa977e]">Qui suis-je ?</p>
              <p className="description">
                Aniss Mahfoudi <br /> Développeur Full Stack
              </p>
            </div>
            <div className="information">
              <p className="title text-4xl text-[#aa977e]">Contact</p>
              <p className="description text-xl">contact@aniss.dev</p>
            </div>
            <div className="information">
              <p className="title text-4xl text-[#aa977e]">Suivez-moi</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/aniss-mahfoudi-007931165"
                  className="social-media text-xl"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Mowee59"
                  className="social-media text-xl"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
