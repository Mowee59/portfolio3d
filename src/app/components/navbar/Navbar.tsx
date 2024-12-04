"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { navLinks } from "@/constants";

const NavItems = () => {
  
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/20">
      <div className="container mx-auto">
        <div className="c-space mx-auto flex items-center justify-between py-5">
          <Link
            href="/"
            className="flex items-baseline gap-3 fill-neutral-400 text-xl font-bold text-neutral-400 transition-colors hover:fill-white hover:text-white"
          >
            <Logo className="size-6" />
            Aniss.dev
          </Link>
          <button
            onClick={toggleMenu}
            className="flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toogle menu"
          >
            <Image
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="menu burger icon"
              width={24}
              height={24}
            />
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
