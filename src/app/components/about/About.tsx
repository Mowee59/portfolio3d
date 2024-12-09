"use client";

import React, { useRef } from "react";
import Bounded from "../hoc/Bounded";

import ContactMe from "./ContactMe";
import Button from "../button/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Globe from "./MyGlobe";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";
import Grid3 from "./Grid3";
import { useComponentLoaded } from "@/app/hooks/useComponentLoaded";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * About component that displays information about the user.
 * It includes multiple grid sections with animations and a globe visualization.
 */
const About = () => {
  // Reference to the container element for the grid
  const containerRef = useRef(null);
  // Reference to the title element
  const titleRef = useRef(null);

  useComponentLoaded("About");

  // Use GSAP for animations on grid items
  useGSAP(() => {
    // Select all elements with the class "grid-container"
    const gridItems = gsap.utils.toArray(".grid-container");

    // Animate the title to fade in
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Apply animation to each grid item
    gridItems.forEach(
      (item, index) => {
        gsap.fromTo(
          item as HTMLElement,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",

            scrollTrigger: {
              trigger: item as HTMLElement,
              start: "top bottom",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1, // Stagger the animations
          },
        );
      },
      { scope: containerRef },
    );
  });

  return (
    <Bounded className="my-20" id="about">
      <h3 className="head-text mb-12" ref={titleRef}>
        A propos de moi
      </h3>
      <div
        ref={containerRef}
        className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6"
      >
        {/* Grid section 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Grid1 />
          </div>
        </div>
        {/* Grid section 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Grid2 />
          </div>
        </div>
        {/* Grid  Globe and contact button */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="mx-auto">
              <Globe />
            </div>
            <div>
              <p className="grid-headtext">Je m&apos;adapte géographiquement</p>
              <p className="grid-subtext">
                Je suis basé à Lille, mais je reste ouvert à des propositions de
                télétravail ou de déplacements ponctuels.
              </p>

              <Button
                label="Me contacter"
                withCircle
                containerClass="w-full mt-10"
                href="#contact"
              />
            </div>
          </div>
        </div>
        {/* Grid section 3 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Grid3 />
          </div>
        </div>
        {/* Grid  with ContactMe component */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <ContactMe />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default About;
