"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import { gsap } from "gsap";
import HeroCamera from "./HeroCamera";
const Shapes = () => {
  return (
    <Canvas
      className="h-full w-full"
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
    >
      <Suspense fallback={null}>
        <HeroCamera>
          <Geometries />
        </HeroCamera>
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.65}
          scale={5}
          blur={1}
          far={9}
        />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
};

const Geometries = () => {
  const { nodes } = useGLTF("/models/logo/logo3d.glb");

  // const { radius, detail } = useControls({
  //   radius: { value: 3, min: 1, max: 10, step: 0.1 },
  //   detail: { value: 0, min: 0, max: 5, step: 1 },
  // });

  const geometries = [
    {
      position: [0, 1, 0],
      r: 0.3,
      geometry: nodes.Curve.geometry,
      scale: 5.5,
    },
    {
      position: [1, -0.75, 4],
      r: 0.3,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16),
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5),
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32),
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5),
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({
      color: 0x2980b9,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];

  return geometries.map(({ position, r, geometry, scale = 1 }) => (
    <Geometry
      key={JSON.stringify(position)}
      r={r}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materials={materials}
      scale={scale}
    />
  ));
};

const Geometry = ({ r, position, geometry, materials, scale }) => {
  const meshRef = useRef();

  const startingMaterial = getRandomMaterial();

  useEffect(() => {
    if (meshRef.current) {
      gsap.from(meshRef.current.position, {
        y: 10, // Start from above
        duration: 1.5,
        ease: "power3.out",
      });
    }
  }, []);

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;
    console.log(mesh);
    gsap.to(mesh.rotation, {
      y: `+=${-Math.PI / 2}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
    });

    mesh.material = getRandomMaterial();
  }

  // const handlePointerOver = () => {
  //   document.body.style.cursor = "pointer";
  //   if (meshRef.current) {
  //     gsap.to(meshRef.current.scale, {
  //       x: 1.2,
  //       y: 1.2,
  //       z: 1.2,
  //       duration: 0.5,
  //       ease: "bounce.out",
  //     });
  //   }
  // };

  // const handlePointerOut = () => {
  //   document.body.style.cursor = "default";
  //   if (meshRef.current) {
  //     gsap.to(meshRef.current.scale, {
  //       x: 1,
  //       y: 1,
  //       z: 1,
  //       duration: 0.5,
  //       ease: "bounce.out",
  //     });
  //   }
  // };

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          material={startingMaterial}
          rotation={[Math.PI / 2, 0, Math.PI]}
          onClick={handleClick}
          // onPointerOver={handlePointerOver}
          // onPointerOut={handlePointerOut}
          visible={true}
          scale={scale}
        />
      </Float>
    </group>
  );
};

export default Shapes;
