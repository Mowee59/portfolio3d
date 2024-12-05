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
        <p className="grid-headtext">Bonjour, je m&apos;apelle Aniss</p>
        {/* Subtext providing more details about my expertise */}
        <p className="grid-subtext">
          Je suis un concepteur développeur passionné. Mon appétence pour le
          domaine et ma curiosité font de moi un développeur polyvalent et
          efficace.
        </p>
      </div>
    </>
  );
};

export default Grid1;
