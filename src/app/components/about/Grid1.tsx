import React from "react";

/**
 * Grid1 component displays an image and a brief introduction text.
 * It is used to provide a visual and textual introduction about me.
 */
const Grid1 = () => {
  return (
    <>
      {/* Display an image related to the about section */}
      <img
        src="/assets/images/grid1.webp"
        alt="about"
        className="h-fit w-full object-contain sm:h-[276px]"
      />
      <div>
        {/* Headline text introducing Aniss */}
        <p className="grid-headtext">Bonjour, je m'apelle Aniss</p>
        {/* Subtext providing more details about Aniss's expertise */}
        <p className="grid-subtext">
          Je suis un développeur passionné par la conception et le développement
          d&apos;applications. Mon expertise réside dans l&apos;utilisation de
          la technologie pour transformer des concepts novateurs en produits
          tangibles et performants.
        </p>
      </div>
    </>
  );
};

export default Grid1;
