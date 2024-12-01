"use client";
import React, { Suspense } from "react";
import Bounded from "../hoc/Bounded";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "@/constants";
import { Center, OrbitControls, Environment } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";
import Avatar from "./Avatar";
const WhyMe = () => {
  return (
    <Bounded>
      <div className="w-full text-white-600">
        <h3 className="head-text">Pourquoi moi ?</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              {/* <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} />*/}
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Avatar position-y={-2.5} scale={2.5} />
              </Suspense>
              <Environment preset="sunset" />
            </Canvas>
          </div>

          <div className="work-content">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map((item, index) => (
                <div key={index} className="work-content_container group">
                  <div className="flex h-full flex-col items-center justify-start py-2">
                    <div className="work-content_logo">
                      <img className="h-full w-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="px-2.5 py-5 sm:p-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="mb-5 text-sm">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="transition-all duration-500 ease-in-out group-hover:text-white">
                      {item.title}
                    </p>
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
