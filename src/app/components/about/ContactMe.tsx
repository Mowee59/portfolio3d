"use client";

import React, { useState } from "react";

const ContactMe = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@aniss.dev");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <>
      <img
        src="/assets/grid4.png"
        alt="Me contacter"
        className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
      />
      <div className="space-y-2">
        <p className="grid-subtext text-center">Contactez moi</p>
        <div className="copy-container" onClick={handleCopy}>
          {/* //TODO: Use next image */}
          <img
            src={hasCopied ? "assets/tick.svg" : "/assets/copy.svg"}
            alt="copy"
          />
          <p className="text-gray_gradient font-medium text-white md:text-xl lg:text-2xl">
            contact@aniss.dev
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
