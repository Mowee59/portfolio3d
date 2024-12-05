import React from "react";

/**
 * Grid3 component displays an image and a detailed text about the developer's passion for development.
 * It serves to convey the enthusiasm and commitment towards creating functional and innovative applications.
 */
const Grid3 = () => {
  return (
    <>
      {/* Display an image representing the developer's passion */}
      {/* TODO: Use next Image  */}
      <img
        src="/assets/images/grid3.webp"
        alt="Ma passion"
        className="h-fit w-full object-contain sm:h-[266px]"
      />
      <div>
        {/* Headline text expressing the developer's passion for development */}
        <p className="grid-headtext">Ma passion pour le développement</p>
        {/* Subtext elaborating on the developer's dedication and approach to development */}
        <p className="grid-subtext">
          Le développement est bien plus qu&apos;un métier pour moi, c&apos;est
          une véritable passion. J&apos;aime transformer des idées en
          applications fonctionnelles et innovantes. Chaque projet est une
          opportunité d&apos;apprendre et de repousser mes limites. Avec le
          temps, j&apos;ai pu m&apos;initier à de nombreux langages, qu&apos;ils
          soient bas niveau ou haut niveau. Je suis également sensible aux
          questions d&apos;architecture et de design pattern.
        </p>
      </div>
    </>
  );
};

export default Grid3;
