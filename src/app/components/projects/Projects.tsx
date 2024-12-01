"use client";

import React, { Suspense } from "react";
import Bounded from "../hoc/Bounded";
import { myProjects } from "@/constants";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../CanvasLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { Center } from "@react-three/drei";
import Computer from "./Computer";
import { useControls } from "leva";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const {
    groupPositionX,
    groupPositionY,
    groupPositionZ,
    groupRotationX,
    groupRotationY,
    groupRotationZ,
  } = useControls({
    groupPositionX: {
      value: 0,
      step: 0.1,
      label: "Position X",
      min: -10,
      max: 10,
    },
    groupPositionY: {
      value: 0,
      step: 0.1,
      label: "Position Y",
      min: -10,
      max: 10,
    },
    groupPositionZ: {
      value: 0,
      step: 0.1,
      label: "Position Z",
      min: -10,
      max: 10,
    },
    groupRotationX: {
      value: 0,
      step: 0.1,
      label: "Rotation X",
      min: -10,
      max: 10,
    },
    groupRotationY: {
      value: 0,
      step: 0.1,
      label: "Rotation Y",
      min: -10,
      max: 10,
    },
    groupRotationZ: {
      value: 0,
      step: 0.1,
      label: "Rotation Z",
      min: -10,
      max: 10,
    },
  });

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" },
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <Bounded>
      <p className="head-text">Ma sélection de projets</p>

      <div className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10">
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

            <a
              className="flex cursor-pointer items-center gap-2 text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>

        <div className="h-96 rounded-lg border border-black-300 bg-black-200 md:h-full">
          <Canvas>
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={12}
                  position={[groupPositionX, groupPositionY, groupPositionZ]}
                  rotation={[groupRotationX, groupRotationY, groupRotationZ]}
                >
                  <Computer />
                </group>
              </Suspense>
            </Center>
            <Environment preset="city" />
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </Bounded>
  );
};

export default Projects;
