"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import { navLinks } from "@/constants";
import { useMediaQuery } from "react-responsive";

const NavItems = ({ onClick }: { onClick: () => void }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <Link
            href={href}
            className="after:origin-cente relative block w-fit cursor-pointer text-xl after:absolute after:block after:h-[3px] after:w-full after:scale-x-0 after:bg-white after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
            onClick={onClick}
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
  const [isVisible, setIsVisible] = useState(true);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLinkClick = () => {
    if (isTablet) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isTablet) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsVisible(false);
          // setIsScrolled(true);
        } else {
          setIsVisible(true);
          // setIsScrolled(false);
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (e.clientY < 80) {
          setIsVisible(true);
        } else if (window.scrollY > 0) {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isTablet]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-[var(--background)]`}
    >
      <div className="container mx-auto">
        <div className="c-space mx-auto flex items-center justify-between py-5">
          <Link
            href="/#home"
            className="flex items-baseline gap-3 fill-neutral-400 text-xl font-bold text-neutral-400 transition-colors hover:fill-white hover:text-white"
          >
            <Logo className="size-6" />
            Aniss.dev
          </Link>
          <button
            onClick={toggleMenu}
            className="flex text-neutral-400 hover:text-white focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <Image
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="menu burger icon"
              width={24}
              height={24}
            />
          </button>
          <nav className="hidden lg:flex">
            <NavItems onClick={handleLinkClick} />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={handleLinkClick} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
