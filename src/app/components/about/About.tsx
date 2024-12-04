"use client";

import React, { useEffect, useRef } from "react";
import Bounded from "../hoc/Bounded";

import dynamic from "next/dynamic";
import Image from "next/image";
import grid2 from "@/assets/grid2.webp";
import ContactMe from "./ContactMe";
import Button from "../button/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Globe from "./MyGlobe";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Select all grid-container elements
    const gridItems = gsap.utils.toArray(".grid-container");

    // Apply animation to each grid item
    gridItems.forEach((item, index) => {
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
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1, // Stagger the animations
        },
      );
    });
  }, []);

  return (
    <Bounded className="my-20">
      <p className="head-text mb-12">Á propos de moi</p>
      <div
        ref={containerRef}
        className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6"
      >
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.webp"
              alt="about"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Bonjour, je m'apelle Aniss</p>
              <p className="grid-subtext">
                Je suis un développeur passionné par la conception et le
                développement d&apos;applications. Mon expertise réside dans
                l&apos;utilisation de la technologie pour transformer des
                concepts novateurs en produits tangibles et performants.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="relative mx-auto">
              <Image
                src={grid2}
                alt="Tech stack"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-fit w-full object-contain sm:w-[276px]"
              />
            </div>
            <div>
              <p className="grid-headtext">Stack Technique</p>
              <p className="grid-subtext">
                Ma stack technique est variée et couvre plusieurs domaines clés
                du développement, allant de la conception à la mise en œuvre.
                Cette polyvalence me permet de m&apos;adapter à divers projets
                et défis technologiques.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="mx-auto">
              <Globe />
            </div>
            <div>
              <p className="grid-headtext">Je m&apos;adapte géographiquement</p>
              <p className="grid-subtext">
                Je suis basé à Lille, mais je suis ouvert à toutes les
                opportunités de déplacement.
              </p>

              <Button
                label="Me contacter"
                withCircle
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* TODO: Use next Image  */}
            <img
              src="/assets/grid3.png"
              alt="Ma passion"
              className="h-fit w-full object-contain sm:h-[266px]"
            />
            <div>
              <p className="grid-headtext">Ma passion pour le développement</p>
              <p className="grid-subtext">
                Le développement est bien plus qu&apos;un métier pour moi,
                c&apos;est une véritable passion. J&apos;aime transformer des
                idées en applications fonctionnelles et innovantes. Chaque
                projet est une opportunité d&apos;apprendre et de repousser mes
                limites. Mon engagement envers la conception et le développement
                me pousse à constamment explorer de nouvelles tendances et à
                perfectionner mes compétences pour créer des solutions
                fonctionnelles et performantes.
              </p>
            </div>
          </div>
        </div>
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
