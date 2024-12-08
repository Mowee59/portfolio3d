import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const HeroCamera = ({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(
    () => {
      if (!groupRef.current) return;

      if (!isMobile) {
        gsap.to(groupRef.current.rotation, {
          x: mousePosition.y / 20,
          y: -mousePosition.x / 15,
          duration: 3,
          ease: "power4.out",
        });
      }
    },
    {
      dependencies: [mousePosition, isMobile],
      scope: groupRef,
    },
  );

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
