/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: UROD Engine (https://sketchfab.com/Starven38)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/personal-computer-aa398650fe6e4baa8771c71266d842f4
Title: Personal Computer
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const Computer: React.FC = (props) => {
  const { nodes, materials } = useGLTF("/assets/computer.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 14.965, 0]} scale={97.604}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.laptop_laptop_0 as Mesh).geometry}
            material={materials.laptop}
            position={[0, -0.153, -0.046]}
          />
        </group>
        <group position={[0, 16.443, -14.084]} scale={97.604}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.screen_laptopScreen_0 as Mesh).geometry}
            material={materials.laptopScreen}
            position={[0, -0.168, 0.099]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/assets/computer.gltf");

export default Computer;