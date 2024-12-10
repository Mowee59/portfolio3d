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
        <p className="grid-headtext">Bonjour, je m&apos;appelle Aniss</p>
        {/* Subtext providing more details about my expertise */}
        <p className="grid-subtext">
          Je suis un développeur passionné avec une curiosité insatiable pour la
          technologie. Ma rigueur et ma polyvalence me permettent de
          m&apos;adapter rapidement aux nouveaux défis.
        </p>
      </div>
    </>
  );
};

export default Grid1;
