"use client";

import React, { useRef, Suspense } from "react";
import Bounded from "../hoc/Bounded";
import { myProjects } from "@/constants";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../loaders/CanvasLoader";
import { Bounds, Environment, OrbitControls } from "@react-three/drei";
import { Center } from "@react-three/drei";
import Computer from "./Computer";
gsap.registerPlugin(ScrollTrigger);

const projectCount = myProjects.length;

/**
 * Projects component displays a list of projects with animations and navigation.
 * It uses GSAP for animations and @react-three/fiber for 3D rendering.
 */
const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  /**
   * Handles navigation between projects.
   * @param {string} direction - The direction to navigate ("previous" or "next").
   */
  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // GSAP animation for project items on scroll
  useGSAP(() => {
    const projectItems = gsap.utils.toArray(".project-container");

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -100,
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

    projectItems.forEach((item, index: number) => {
      gsap.fromTo(
        item as HTMLElement,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item as HTMLElement,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.3, // Stagger the animations
        },
      );
    });
  }, []);

  // GSAP animation for text when selected project changes
  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" },
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <Bounded id="projects" ref={containerRef}>
      <h3 className="head-text" ref={titleRef}>
        Ma sélection de projets
      </h3>

      <div
        ref={containerRef}
        className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2 project-section"
      >
        <div className="project-container relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10">
          <div className="absolute right-0 top-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="h-96 w-full rounded-xl object-cover"
            />
          </div>

          <div
            className="w-fit rounded-lg p-3 backdrop-blur-3xl backdrop-filter"
            style={currentProject.logoStyle}
          >
            <img
              className="h-10 w-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="my-5 flex flex-col gap-5 text-white-600">
            <p className="animatedText text-2xl font-semibold text-white">
              {currentProject.title}
            </p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {currentProject.live && (
                <a
                  className="flex cursor-pointer items-center gap-2 text-white-600"
                  href={currentProject.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Voire en live</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="h-3 w-3"
                  />
                </a>
              )}
              {currentProject.github && (
                <a
                  className="flex cursor-pointer items-center gap-2 text-white-600"
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Voir sur GitHub</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="h-3 w-3"
                  />
                </a>
              )}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/icons/left-arrow.png" alt="left arrow" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/icons/right-arrow.png"
                alt="right arrow"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>

        <div className="project-container h-96 rounded-lg border border-black-300 bg-black-200 md:h-full">
          <Canvas>
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={10} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                  <Bounds clip fit observe margin={1.5}>
                    <Computer screenTexture={currentProject.texture} />
                  </Bounds>
                </group>
              </Suspense>
            </Center>
            <Environment preset="city" />
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableZoom={true}
              enablePan={true}
              makeDefault
            />
          </Canvas>
        </div>
      </div>
    </Bounded>
  );
};

export default Projects;
