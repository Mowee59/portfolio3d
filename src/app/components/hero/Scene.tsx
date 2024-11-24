"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useControls } from "leva";

const Scene = () => {
  return (
    <Canvas
      className="h-full w-full"
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
    >
      {/* TODO : Add suspense fallback */}
      <Suspense fallback={null}>
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.65}
          scale={40}
          blur={1}
          far={9}
        />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
