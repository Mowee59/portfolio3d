import React from "react";
import Image from "next/image";
import grid2 from "@/assets/images/grid2.webp";

/**
 * Grid2 component displays an image representing the tech stack and a brief description.
 * It is used to showcase the variety and adaptability of the technical stack.
 */
const Grid2 = () => {
  return (
    <>
      <div className="relative mx-auto">
        {/* Display an image related to the tech stack */}
        <Image
          src={grid2}
          alt="Tech stack"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-fit w-full object-contain sm:w-[276px]"
        />
      </div>
      <div>
        {/* Headline text introducing the tech stack */}
        <p className="grid-headtext">Stack Technique</p>
        {/* Subtext providing more details about the technical stack's versatility */}
        <p className="grid-subtext">
          Ma stack technique est variée et couvre plusieurs domaines clés,
          allant de la conception à la mise en œuvre. Cette polyvalence me
          permet de m&apos;adapter à divers projets et défis techniques.
          L&apos;apprentissage de nouveaux languages ou frameworks n&apos;est
          pas un frein pour moi.
        </p>
      </div>
    </>
  );
};

export default Grid2;
