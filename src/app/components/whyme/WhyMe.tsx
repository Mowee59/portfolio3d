"use client";
import React, { Suspense, useRef, useState } from "react";
import Bounded from "../hoc/Bounded";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "@/constants";
import { OrbitControls, Environment } from "@react-three/drei";
import Avatar from "./Avatar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyMe = () => {
  const [animationName, setAnimationName] = useState("idle");
  const titleRef = useRef(null);

  useGSAP(() => {
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
  });

  return (
    <Bounded id="whyme">
      <div className="w-full text-white-600">
        <h3 className="head-text" ref={titleRef}>
          Pourquoi moi ?
        </h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              {/* <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} />*/}
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={null}>
                <Avatar
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
              <Environment preset="sunset" />
            </Canvas>
          </div>

          <div className="work-content">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group"
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                >
                  <div className="flex h-full flex-col items-center justify-start py-2">
                    <div className="work-content_logo">
                      <img className="h-full w-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="px-2.5 py-5 sm:p-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    {/* <p className="mb-5 text-sm">
                      {item.pos} -- <span>{item.duration}</span>
                    </p> */}
                    <p
                      className="transition-all duration-500 ease-in-out group-hover:text-white"
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default WhyMe;
