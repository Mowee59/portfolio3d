import React from "react";
import { useGLTF } from "@react-three/drei";
import { SkinnedMesh } from "three";

const Avatar: React.FC<JSX.IntrinsicElements['group']> = ({ scale = 1, ...props }) => {
  const { nodes, materials } = useGLTF("/models/avatar.glb") as any;
  return (
    <group {...props} dispose={null} scale={scale}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeLeft as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeLeft as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeRight as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeRight as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Hair as SkinnedMesh).geometry}
        material={materials.Wolf3D_Hair}
        skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
      />
    </group>
  );
};

useGLTF.preload("/models/avatar.glb");

export default Avatar;
