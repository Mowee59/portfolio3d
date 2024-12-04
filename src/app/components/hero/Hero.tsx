"use client";

import { heroText } from "@/constants";
import React from "react";
import {  useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Bounded from "../hoc/Bounded";
import Shapes from "./Shapes";

const Hero = () => {
  const component = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        },
      );

      tl.fromTo(
        ".description",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
        },
      );
    },
    { scope: component },
  );

  /**
   * Splits the given text into individual letters and wraps each letter in a span element
   * with specific animation classes.
   *
   * @param {string} text - The text to be split into letters.
   * @param {string} label - The label used to create unique class names for each letter.
   * @returns {JSX.Element[] | null} An array of span elements containing the letters, or null if the text is empty.
   */
  const renderLetters = (text: string, label: string) => {
    if (!text) return null;

    return text.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-letter-${label} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    //TODO: fix the height of the hero in mobile resolution
    <Bounded
      ref={component}
      className="flex max-h-fit min-h-screen items-center"
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(6rem,12vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={`${heroText.prenom} ${heroText.nom} ${heroText.description}`}
          >
            <span className="block text-slate-300">
              {renderLetters(heroText.prenom, "prenom")}
            </span>
            <span className="-mt-[.2em] block text-[clamp(6rem,12vmin,20rem)] font-bold text-slate-500">
              {renderLetters(heroText.nom, "nom")}
            </span>
            <span className="description block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
              {heroText.description}
            </span>
          </h1>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
